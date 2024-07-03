"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //  up khi thêm dữ liệu vào
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "haungodan@example.com",
        password: "123456",
        firstName: "Vito",
        lastName: "Coleone",
        address: "Ha Noi",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  //rollback là back version khi bị lỗi

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
