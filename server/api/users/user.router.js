var router = require('express').Router();
var Conversation = require('../../db').Conversation;
var Message = require('../../db').Message;
var User = require('../../db').User;
var Bluebird = require('bluebird');
// router.get('/', function (req, res, next) {
//   User.findAll()
//   .then(users => {
//     if (req.query.limit >= 0) {
//       res.json(users.slice(0, req.query.limit));
//     } else {
//       res.json(users);
//     }
//   })
//   .catch(next);
// });

router.get('/', function (req, res, next) {
  var findingUsers = User.findAll();
  var findingConversations = Conversation.findAll({include: Message});

  Bluebird.all([findingUsers, findingConversations])
  .then(results => {
    var users = results[0];
    var conversations = results[1];
    users.conversations = conversations;
    res.json(users.conversations);
  })
  .catch(next);
});

router.param('id', function (req, res, next, id) {
  User.findById(id)
  .then(user => {
    if (!user) throw Error(404);
    req.requestedUser = user;
    next();
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.requestedUser.reload()
  .then(user => res.json(user))
  .catch(next);
});

module.exports = router;
