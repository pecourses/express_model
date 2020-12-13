'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  // расширить описание модели
  /*Task.init({
    value: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN,
    deadline: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });*/
  Task.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    isDone: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    deadline: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notNull: true,
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
    underscored: true,
    tableName: 'tasks'
  });
  return Task;
};