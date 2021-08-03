// import models
const Item = require("./Item");
const Type = require("./Type");
const Tag = require("./Tag");
const ItemTag = require("./ItemTag");
const User = require("./user");

module.exports = { User };

// Items belongsTo Type
Item.belongsTo(Type, {
  foreignKey: "type_id",
});

// Types have many Items
Type.hasMany(Item, {
  foreignKey: "type_id",
});

// Items belongToMany Tags (through ItemTag)
Item.belongsToMany(Tag, {
  through: {
    model: ItemTag,
    unique: false,
  },
});

// Tags belongToMany Items (through ItemTag)
Tag.belongsToMany(Item, {
  through: {
    model: ItemTag,
    unique: false,
  },
});

module.exports = {
  Item,
  Type,
  Tag,
  ItemTag,
  User,
};
