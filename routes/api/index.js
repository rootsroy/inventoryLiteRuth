const router = require('express').Router();
const typesRoutes = require('./typeroutes');
const itemsRoutes = require('./itemroutes');
const tagRoutes = require('./tagroutes');


//Url...
router.use('/types', typesRoutes);
router.use('/items', itemsRoutes);
router.use('/tags', tagRoutes);

module.exports = router;