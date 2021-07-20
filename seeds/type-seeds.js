const { Type } = require('../models');

const typeData = [
  {
    type_name: 'Shirts',
  },
];

const seedTypes = () => Type.bulkCreate(typeData);

module.exports = seedTypes;