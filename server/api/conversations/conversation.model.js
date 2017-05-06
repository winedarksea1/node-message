var Sequelize = require('sequelize');
var db = require('../../_db');

var Conversation = db.define('conversation', {
  active: Sequelize.BOOLEAN
});

module.exports = Conversation;
