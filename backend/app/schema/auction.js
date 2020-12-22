const types = `
  type Auction {
    id: ID
    item: AuctionItem
    buyout: Float # "GraphQLError: Int cannot represent non 32-bit signed integer value"
    quantity: Int
    time_left: String
  }

  type AuctionItem {
    id: ID
    modifiers: [AuctionItemMod]
  }

  type AuctionItemMod {
    type: Int
    value: Int
  }
`;

const queries = ``;

module.exports = {
  schema: {
    types,
    queries,
  },
};
