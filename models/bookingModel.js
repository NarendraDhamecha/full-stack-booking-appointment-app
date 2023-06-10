const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Users = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userMobileNo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Users;
