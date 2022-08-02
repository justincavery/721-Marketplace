import {
  sale,
  transaction,
  currency,
  transfer,
} from '../../generated/schema'

import {
  MatchTransferWithSale
} from "../../src/utils/matchTransferSale"

import {
  OrderFulfilled,
} from '../../generated/SeaPort/SeaPort'

import {
  constants, ERC20Contracts
} from '../../src/graphprotocol-utils'

import { handleTransfer } from '../eip721/index'

import {
  BigDecimal, Address, BigInt, ethereum, log, Bytes
} from "@graphprotocol/graph-ts"

import {
  Transfer as TransferEvent,
} from '../../generated/IERC721/IERC721'

// TakerAsk Handler starts here
export function handleOrderFulfilled(event: OrderFulfilled): void {

  //Use transaction receipts to check if the transfer has already been logged
  let _receipt = event.receipt

  if (_receipt && event.params.offer.length > 0) {

    if (event.params.offer[0].token == Address.fromString('0x4591c791790f352685a29111eca67abdc878863e')) {

      let _topic0 = Bytes.fromHexString('0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')
      let _identifier = event.params.offer[0].identifier
      let _token = Address.fromString('0x4591c791790f352685a29111eca67abdc878863e') //event.params.offer[0].token

      //For each event in the _receipt.logs loop through the beow logic: 
      log.warning("Index {}", [_receipt.logs.length.toString()])

      for (let index = 0; index < _receipt.logs.length; index++) {

        log.warning("event {}, Topics {}", [_receipt.logs[index].logIndex.toString(), _receipt.logs[index].topics.length.toString()])
        
        //Verify that there are 4 topics (0-3) for standard 721 Transfer
        //Verify topic0 is the correct event signature for 721 Transfer
        if (_receipt.logs[index].topics.length == 4 && _receipt.logs[index].topics[0] == _topic0) {

          //the transferred token's collectionId & identifier belongs to the OrderFulfilled event that is being processed
          let _topic3 = _receipt.logs[index].topics[3].toHexString()
          log.warning("_topic3 {}, raw_identifier {}", [_topic3, _receipt.logs[index].topics[3].toString()])

          if (BigInt.fromString(_topic3) == _identifier && _receipt.logs[index].address == _token) {

            //check to see if transfer has already been processed

            let _FromEventParam = new ethereum.EventParam(
              "from", ethereum.Value.fromBytes(_receipt.logs[index].topics[1]))            //params.from

            let _ToEventParam = new ethereum.EventParam(
              "to", ethereum.Value.fromBytes(_receipt.logs[index].topics[2]))              //params.to

            let _tokenIdEventParam = new ethereum.EventParam(
              "tokenId", ethereum.Value.fromBytes(_receipt.logs[index].topics[3]))         //params.tokenId

            let _EventParam = new Array<ethereum.EventParam>()

            _EventParam.push(_FromEventParam)
            _EventParam.push(_ToEventParam)
            _EventParam.push(_tokenIdEventParam)
            
            var _transferEvent = new TransferEvent(
              _receipt.logs[index].address,              //Address
              _receipt.logs[index].logIndex,             //logIndex
              _receipt.logs[index].transactionLogIndex,  //transactionLogIndex
              _receipt.logs[index].logType,              //logType
              event.block,                               //block
              event.transaction,                         //transaction
              _EventParam,                               //parameters
              _receipt                                   //receipt
            )

            //run handleTransfer
            log.warning("Run handleTransfer. Transaction {}", [event.transaction.hash.toString()])
            handleTransfer(_transferEvent)

          }
        }
      }
    }
  }



  ////When sale occurs after transfers//////
  let tx = transaction.load(event.transaction.hash.toHexString())

  if (tx) {

    let saleEntity = sale.load(event.block.number.toString() + '-' + event.logIndex.toString())
    if (!saleEntity && tx.unmatchedTransferCount > 0) {

      ERC20Contracts.getERC20(event.params.offer[0].token)
      let currencyEntity = currency.load(event.params.offer[0].token.toHexString())

      if (currencyEntity) {
        let amountDecimals = constants.BIGINT_TEN.pow(currencyEntity.decimals as u8)

        //4. sum the total amount for the sale
        let price = constants.BIGINT_ZERO
        for (let index = 0; index < event.params.offer.length; index++) {

          price = price.plus(event.params.offer[index].amount)

        }

        //5. Assign currency address, amount, txId and platform to sale entity
        let saleEntity = new sale(event.block.number.toString() + '-' + event.logIndex.toString())
        saleEntity.transaction = tx.id
        saleEntity.currency = currencyEntity.id
        saleEntity.platform = 'OpenSea'
        saleEntity.amount = price.divDecimal(BigDecimal.fromString(amountDecimals.toString()))
        saleEntity.blockNumber = event.block.number.toI32()
        saleEntity.timestamp = event.block.timestamp.toI32()
        saleEntity.save()

        //6. Assign sale.amount / transaction.unmatchedTransferCount to variable transferAmount to pass into transfer entities 
        // This derives the amount per transfer (eg each nft's amount in a bundle with 2 NFT's is the total price divided by 2.)
        let transferAmount = saleEntity.amount.div(BigDecimal.fromString(tx.unmatchedTransferCount.toString()))

        //6. Using unmatchedTransferId loop through the transfer entities and apply the transferAmount and assign saleId , 
        //reducing the unmatchedTransferCount by 1. save transfer update on each loop.
        if (tx.transfers && transferAmount && tx.id && saleEntity.id) {

          let array = tx.transfers
          for (let index = 0; index < array.length; index++) {

            let trId = array[index]

            MatchTransferWithSale(
              trId,
              transferAmount,
              tx.id,
              saleEntity.id,
              currencyEntity.symbol,
            )
          }
        }
      }
    }
  }
}

