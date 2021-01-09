const types = `
  type Auction {
    id: ID
    item: AuctionItem
    buyout: Float # "GraphQLError: Int cannot represent non 32-bit signed integer value"
    quantity: Int
    unit_price: Float
    time_left: String
  }

  type AuctionItem {
    id: ID
    context: Int
    modifiers: [AuctionItemMod]
    bonus_lists: [Int]
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
