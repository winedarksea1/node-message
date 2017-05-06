var db = require('./_db');

var User = require('./api/users/user.model');
var Conversation = require('./api/conversations/conversation.model');
var Message = require('./api/messages/message.model');

User.belongsToMany(Conversation, {
  as: 'Conversations',
  through: 'user_conversation',
  foreignKey: 'user_id'
});

Conversation.belongsToMany(User, {
  as: 'Users',
  through: 'user_conversation',
  foreignKey: 'conversation_id'
});

Conversation.hasMany(Message, {as: 'Messages'});
User.hasMany(Message, {as: 'Messages'});
// Message.belongsTo(Conversation);

module.exports = db;
