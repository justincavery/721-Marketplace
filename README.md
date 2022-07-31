# NFT Sales
###### Made by Data Nexus & Ahmad Merdeni under MIT License

Subgraph to index all 721 NFT transfers, then attempt to match NFT Marketplace's sale events to the transfer.

[API Documentation](https://docs.datanexus.tech/erc721-marketplace/intro)

The intent is that we can graft new marketplace contracts to include sale events as their contracts are deployed and mapped.

Key Assumption made in this logic is that every marketplace calls an NFT contract's transfer event BEFORE they emit their sale event (OrdersMatched, TakerBid, TakerAsk etc.). Upon the contracts transfer event, we handleTransfer, then upon the marketplace's sale event we handleSale (which updates the transfer entity).


# TODO:

Listen to EvInventory anonymous event for X2Y2 pricing

Inspect SeaPort to dynamically index all marketplaces deriving from SeaPort contracts.

Inspect thirdweb NFT Factory contract to dynamically index all sales from marketplaces deriving from thirdweb - pending meeting with thirdweb team.

Update decimal eponentiation in mappings should a sale occur in an ERC20 that is not 18 decimals.

Inspect Coinbase NFT Marketplace transactions to include into sale entities.



# OpenSea

Various Transaction Type examples:

[Opensea Transaction](https://etherscan.io/tx/0xd5998f56b9f1d0308d572a4b15e4ef6348ebb26a7f37d88c82c20ada769bda39) 

[Opensea Bundle](https://etherscan.io/tx/0x9b16c3448cf2c7db57169d2bda94add45c2cb12cd9c36d385ee86803d5e42964)

[Opensea APE Purchase](https://etherscan.io/tx/0x672d9d065d9a86e0e083d069a5809b7aacc53a46d0f4e67547495ade6ea0730c)

[Seaport ETH Purchase](https://etherscan.io/tx/0xdd01be9ce5e65c311ac7a46d01fc25006d658e7bcb45841d05085af93f02b626)

[Seaport WETH Bundle Purchase](https://etherscan.io/tx/0xbd635659031389258d6bb8ff9634d0bdca6786ce86306d5ae08eb910f60b67c1)

# LooksRare:

Various Transaction Type examples:

[TakerBid](https://etherscan.io/tx/0xcb84b421d0e355f02e4beace7ec54edaa57cdcd68ca4c1e2b69af6636c33fe5d)

[TakerAsk](https://etherscan.io/tx/0xf76051068ae86d602265feeb835677cff7105a718d010de6fd412e57dec87af4)



# Gem.xyz

Interesting sweep transactions with cross platform sales noting to ensure it indexes as intended.

[multicontract transaction](https://etherscan.io/tx/0x692af20c5e84c896984034d8636da698e40fae72e973fc090fc46ad0dda06f52) 

[multicontract transaction](https://etherscan.io/tx/0xa3ac2b2af60fa2a5af4d724e7bfb3d0cdcf4056a524bea40e40987d92cf527f3)

[Seaport & LR Sweep](https://etherscan.io/tx/0x8feaf8fbd4e3b7f5f66282083d13afb2cee7759c512d980fc0cf43b3919ed5cd)


# Contracts

OpenSea v1 - 0x7be8076f4ea4a4ad08075c2508e481d6c946d12b (start block 5774644)

Opensea V2 - 0x7f268357a8c2552623316e2562d90e642bb538e5 (start block 14120913)

Seaport - 0x00000000006c3852cbEf3e08E8dF289169EdE581 (start block 14946474)

LooksRare - 0x59728544B08AB483533076417FbBB2fD0B17CE3a (start block 13885625)

X2Y2 - 0x74312363e45dcaba76c59ec49a7aa8a65a67eed3 (start block 14139150)
