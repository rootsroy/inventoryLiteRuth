const { Type } = require('../models');

const typeData = [
  {
    type_name: 'Shirts',
  },
  {
    type_name: 'Shorts',
  },
  {
    type_name: 'Music',
  },
  {
    type_name: 'Hats',
  },
  {
    type_name: 'Shoes',
  },
];

const seedTypes = () => Type.bulkCreate(typeData);

module.exports = seedTypes;