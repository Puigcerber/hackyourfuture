'use strict';

module.exports = function(sequelize, DataTypes) {
  var Hacker = sequelize.define('hacker', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    role: DataTypes.STRING
  });
  return Hacker;
};
