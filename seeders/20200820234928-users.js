const bcrypt = require('bcryptjs');

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
      firstname: 'Lautaro',
      lastname: 'Rivero',
      email: 'lautaro@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
}