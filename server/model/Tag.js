const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Tag extends Model {}

Tag.init(
  {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
      }
  },
  {
    sequelize
  }
);

module.exports = Tag;