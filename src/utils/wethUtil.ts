import { Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../../generated/IERC721/ERC20";

import {
    transaction,
	wethTransaction
} from '../../generated/schema'



export function handleTransfer(event: Transfer): void {

    if (event.transaction.to == Address.fromString('0x7be8076f4ea4a4ad08075c2508e481d6c946d12b') //OpenseaV1
    || event.transaction.to == Address.fromString('0x7f268357A8c2552623316e2562D90e642bB538E5') //OpenseaV2
    || event.transaction.to == Address.fromString('0x0a267cf51ef038fc00e71801f5a524aec06e4f07') //Genie
    || event.transaction.to == Address.fromString('0x83c8f28c26bf6aaca652df1dbbe0e1b56f8baba2') //GemSwapV2
    ) {
        let wethTest = wethTransaction.load("1")
        if (!wethTest) {
            let wethTest =  new wethTransaction("1")
            wethTest.transaction = event.transaction.hash.toHexString()

            wethTest.save()
        }

        if (wethTest) {
            if (wethTest.transaction != event.transaction.hash.toHexString()) {
                
                wethTest.transaction = event.transaction.hash.toHexString() 

                wethTest.save()
            }
        }
    }
}

