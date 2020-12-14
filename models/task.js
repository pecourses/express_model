'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
    }
  }

  Task.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      isDone: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      deadline: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notNull: true,
        },
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Task',
      underscored: true,
      tableName: 'tasks',
    }
  );
  return Task;
};
