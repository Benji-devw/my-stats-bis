'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      match_id: {
        type: Sequelize.INTEGER
      },
      media_video: {
        type: Sequelize.STRING
      },
      team1_name: {
        type: Sequelize.STRING
      },
      team2_name: {
        type: Sequelize.STRING
      },
      team1_score: {
        type: Sequelize.INTEGER
      },
      team2_score: {
        type: Sequelize.INTEGER
      },
      match_average: {
        type: Sequelize.REAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matches');
  }
};