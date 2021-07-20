const { Item } = require('../models');

const itemData = [
  {
    item_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    type_id: 1,
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;

//hello