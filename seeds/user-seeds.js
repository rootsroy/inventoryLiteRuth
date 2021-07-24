const { User } = require('../models');

const userData = [
    {
        username: 'rumtikitum',
        email: 'email@gmail.com',
        password: 'password'
    }
];

const seedItems = () => User.bulkCreate(userData);

module.exports = seedItems;

//hello