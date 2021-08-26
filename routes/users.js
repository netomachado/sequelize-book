const { Router } = require('express');
const router = Router();

/* GET users listing. */
router.get('/', function (request, response) {
  response.json({ message: 'Hello Sequelize' });
});

module.exports = router;
