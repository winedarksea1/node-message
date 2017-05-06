var Sequelize = require('sequelize');
var db = require('../../_db');

var Message = db.define('message', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Message;
