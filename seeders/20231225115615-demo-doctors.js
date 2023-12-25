const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          id: uuidv4(),
          name: "Алексей5",
          spec: "Терапевт",
          slots: JSON.stringify(["2023-01-01T10:00:00", "2023-01-01T11:00:00"]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Ольга5",
          spec: "Педиатр",
          slots: JSON.stringify(["2023-01-01T10:00:00", "2023-01-01T11:00:00"]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("doctors", null, {});
  },
};
