const { Router } = require('express');
const router = Router();
const UsersController = require('../controllers/UsersController');


/* GET users listing. */
router.get('/', async function (request, response) {
  const users = await UsersController.getAllUsers();

  response.json(users);
});

router.post('/:id/books', async function (request, response) {
  const { id } = request.params;
  const { title, author, price  } = request.body;

  const book = await UsersController.addBooktoUser(id, { title, author, price });

  response.json(book);
});

router.post('/:id/address', async function (request, response) {
  const { id } = request.params;
  const { zip_code, street, street_number, neighborhood, city, state, country } = request.body;

  const address = await UsersController.addAddresstoUser( id, { zip_code, street, street_number, neighborhood, city, state, country
  });

  response.json(address);
});



module.exports = router;
