var db = require('./server/db').db;
var User = require('./server/db').User;
var Conversation = require('./server/db').Conversation;
var Message = require('./server/db').Message;
var Bluebird = require('bluebird');

var users = [
  {
    first_name: 'Tim',
    last_name: 'Hughes',
    email: 'tim@gmail.com',
    password: 'vinnies',
    isAdmin: true
  },
  {
    first_name: 'Peter',
    last_name: 'Fitzgerald',
    email: 'peter@gmail.com',
    password: 'socialism',
    isAdmin: false
  },
  {
    first_name: 'Jack',
    last_name: 'Deming',
    email: 'jack@gmail.com',
    password: 'heynow',
    isAdmin: false
  }
];

var conversations = [
  {active: true},
  {active: true},
  {active: false}
];

var messages = [
  {text: "What did you think of guardians"},
  {text: "What are you up to?"},
  {text: "What time is the party?"}
];

var syncingUsers = () => users.map(user => User.create(user));
var syncingConversations = () => conversations.map(conversation => Conversation.create(conversation, {include: [Message]}));
var syncingMessages = () => messages.map(message => Message.create(message));

db.sync({force: true})
.then(syncingUsers)
.then(syncingConversations)
.then(syncingMessages)
.then(() => console.log("db sync successful!!"))
.catch(new Error("sync not successful"));

// db.sync({force: true})
// .then(Bluebird.all([syncingUsers, syncingConversations, syncingMessages]))
// .then(function () {
//   console.log('db sync successful');
// })
// .catch(console.error("db sync not successful"));
