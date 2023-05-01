const Sequelize = require('sequelize');
const db = require('../database/db');

const Meli = db.define('meli', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  store: {
    type: Sequelize.STRING,
    allowNull: true
  },
  search: {
    type: Sequelize.STRING,
    allowNull: true
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: true
  },
  seller: {
    type: Sequelize.STRING,
    allowNull: true
  },
  img: {
    type: Sequelize.TEXT(),
    allowNull: true
  },
  url: {
    type: Sequelize.TEXT(),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT('long'),
    allowNull: true
  },
}, {
  tableName: 'meli'
});

Meli.sync();

module.exports = Meli;
