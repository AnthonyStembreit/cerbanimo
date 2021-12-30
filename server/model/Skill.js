const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Skill extends Model { }

Skill.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: [40]
              }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: [400]
              }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Skill'
    }
);

module.exports = Skill;