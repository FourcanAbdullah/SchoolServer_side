const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.cappex.com/sites/default/files/images/hero/college/190150_hero.jpg"
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT,
  },


});

module.exports = Campus;