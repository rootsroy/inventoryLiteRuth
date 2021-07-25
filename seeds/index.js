const seedTypes = require('./type-seeds');
const seedItems = require('./item-seeds');
const seedTags = require('./tag-seeds');
const seedItemTags = require('./item-tag-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedTypes();
  console.log('\n----- TYPES SEEDED -----\n');

  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedItemTags();
  console.log('\n----- Item TAGS SEEDED -----\n');

  await seedUser();
  console.log('\n----- User TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
