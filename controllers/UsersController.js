const usersModel = require('../models/users');


exports.getAllUsers = () => usersModel.getAllUsers();

exports.addBooktoUser = ( id, book ) => usersModel.addBooktoUser( id, book );

