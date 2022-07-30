import {
	sale,
	transaction,
  currency,
} from '../../generated/schema'

import { MatchTransferWithSale} from "../../src/utils/matchTransferSale"
import { EvInventory} from '../../generated/X2Y2/X2Y2_R1'
import { BigDecimal} from "@graphprotocol/graph-ts"
import { ERC20Contracts, constants} from '../graphprotocol-utils'
 
// TakerBid Handler starts here
export function handleEvInventory(event: EvInventory): void {
  
  //1. load transaction
  let tx = transaction.load(event.transaction.hash.toHexString())
  
  //2. nullcheck transaction entity (one should already exist for the transfer earlier in that) if it doesn't exist should we error or skip?  
  //&& event.transaction.value != constants.BIGINT_ZERO && event.params.buyHash != ) {
  if (tx){
    
    //3. create new sale entity (id = tx hash - eventId)  
    let saleEntity = sale.load(event.block.number.toString() + '-' + event.logIndex.toString())
    if (!saleEntity && tx.unmatchedTransferCount > 0) {
        
      ERC20Contracts.getERC20(event.params.currency)
      let currencyEntity = currency.load(event.params.currency.toHexString())

      if (currencyEntity) {
        //Gather the decimals used in the currency transacted in
        let amountDecimals = constants.BIGINT_TEN.pow(currencyEntity.decimals)
        
        //4. Assign currency address, amount, txId and platform to sale entity
        let saleEntity = new sale(event.block.number.toString() + '-' + event.logIndex.toString())
        saleEntity.transaction   = tx.id
        saleEntity.currency      = currencyEntity.id
        saleEntity.platform      = 'X2Y2'
        saleEntity.amount        = BigDecimal.fromString(event.params.item.price.divDecimal(BigDecimal.fromString(amountDecimals.toString())).toString())
        saleEntity.blockNumber   = event.block.number.toI32()
        saleEntity.timestamp     = event.block.timestamp.toI32()
        saleEntity.save()
        
        //5. Assign sale.amount / transaction.unmatchedTransferCount to variable transferAmount to pass into transfer entities 
        // This will derives the amount per transfer (eg each nft's amount in a bundle with 2 NFT's is the total price divided by 2.)
        let transferAmount      = saleEntity.amount.div(BigDecimal.fromString(tx.unmatchedTransferCount.toString()))  
        
        //6. Using unmatchedTransferId loop through the transfer entities and apply the transferAmount and assign saleId , 
        //reducing the unmatchedTransferCount by 1. save transfer update on each loop.
        if(tx.transfers && transferAmount && tx.id && saleEntity.id) {
                  
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
