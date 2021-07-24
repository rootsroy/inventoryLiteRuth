const { ItemTag } = require('../models');

const itemTagData = [
  {
    item_id: 1,
    tag_id: 1,
  },
  {
    item_id: 2,
    tag_id: 1,
  },
];

const seedItemTags = () => ItemTag.bulkCreate(itemTagData);

module.exports = seedItemTags;