import {
  sale,
  transaction,
  currency,
} from '../../generated/schema'

import {
  MatchTransferWithSale
} from "../../src/utils/matchTransferSale"

import {
    OrderFulfilled,
} from '../../generated/SeaPort/SeaPort'

import {
	constants, ERC20Contracts, transactions
} from '../../src/graphprotocol-utils'

import { 
  BigDecimal,Address
} from "@graphprotocol/graph-ts"

// TakerAsk Handler starts here
export function handleOrderFulfilled(event: OrderFulfilled): void {
  
// add nullcheck on index.ts on transfer entity since the ETH sale events occur first on SeaPort
  //1 nullcheck/create transaction entity
  //2 nullcheck transfer entity, if it doesn't exist loop through transaction receipts and create all necessary transfers tied to the sale event.
  //3 create sale entity

//


// run matchTransferSale

}

