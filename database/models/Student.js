const Sequelize = require('sequelize');
const db = require('../db');


const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
  },

  gpa: {
    type: Sequelize.FLOAT,
        validate: {
      max: 4,
      min: 0
    }
  },
});


module.exports = Student;