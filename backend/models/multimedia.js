const Sequelize = require ('sequelize')
const sequelize = require ('../util/database');
const User = require('./user');

const Multimedia = sequelize.define('multimedia', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNul: false,
    primaryKey: true,

  },

  title: {
    type: Sequelize.STRING,
    allowNul: false,
    unique: true,
  },

  text: {
    type: Sequelize.TEXT,
    allowNul: false,

  },
  image: {
    type: Sequelize.STRING,
    allowNul: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNul:false,
    references: {
      model:'users',
      key:'id'
    }

  },
  
 

})


module.exports = Multimedia;