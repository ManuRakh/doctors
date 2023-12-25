const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('doctors', [{
      id: uuidv4(),
      name: 'Алексей',
      spec: 'Терапевт',
      slots: JSON.stringify(["09:00", "10:00", "11:00"]),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: uuidv4(),
      name: 'Ольга',
      spec: 'Педиатр',
      slots: JSON.stringify(["12:00", "13:00", "14:00"]),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('doctors', null, {});
  }
};
