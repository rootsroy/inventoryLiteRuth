const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;