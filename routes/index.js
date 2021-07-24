const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  // res.status(404).end(); to let us know if the request does not exist?
  res.send("<h1>Wrong Route!</h1>") // does this do the same?
});

module.exports = router;