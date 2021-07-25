const router = require('express').Router();
const typeRoutes = require('./type-routes');
const itemRoutes = require('./item-routes');
const tagRoutes = require('./tag-routes');


//Url...
router.use('/types', typeRoutes);
router.use('/items', itemRoutes);
router.use('/tags', tagRoutes);

module.exports = router;