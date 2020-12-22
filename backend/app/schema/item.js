const types = `
  type Item {
    id: ID
    name: Locales
    quality: ItemQuality
    level: Int
    required_level: Int
    media: ItemMedia
    item_class: ItemClass
    item_subclass: ItemSubclass
    inventory_type: ItemInventoryType
    preview_item: ItemPreview
  }

  type ItemQuality {
    type: String
    name: Locales
  }

  type ItemClass {
    id: ID
    name: Locales
  }

  type ItemSubclass {
    id: ID
    name: Locales
  }

  type ItemInventoryType {
    type: String
    name: Locales
  }

  type ItemMedia {
    id: Int
  }

  type ItemPreview {
    name: Locales
    quality: ItemQuality
    item_class: ItemClass
    item_subclass: ItemSubclass
    inventory_type: ItemInventoryType
    binding: ItemBinding
    armor: ItemArmor
    # requirements
    level: ItemLevel
  }

  type ItemBinding {
    type: String
    name: Locales
  }

  type ItemArmor {
    value: Int
    display: ItemArmorDisplay
  }

  type ItemArmorDisplay {
    display_string: Locales
  }

  type ItemLevel {
    value: Int
    display_string: Locales
  }
`;

const queries = `
  item(itemId: ID): Item @cacheControl(maxAge: 86400)
`;

module.exports = {
  schema: {
    types,
    queries,
  },
};
