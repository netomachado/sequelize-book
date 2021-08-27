'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      first_name: "José",
      last_name: "Machado",
      email: "neto@neto",
      password: bcrypt.hashSync('123456')
     }, {
      first_name: "Julia",
      last_name: "Campos",
      email: "julia@julia",
      password: bcrypt.hashSync('123456')
     }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
