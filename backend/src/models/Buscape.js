const Sequelize = require('sequelize');
const db = require('../database/db');

const Buscape = db.define('buscape', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allownNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  seller: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false
  }
  }, {
    tableName: 'buscape'
});
  
Buscape.sync();

module.exports = Buscape;
