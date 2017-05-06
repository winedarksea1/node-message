var router = require('express').Router();
var Conversation = require('./conversation.model');

router.get('/', function (req, res, next) {
  Conversation.findAll()
  .then(conversations => {
    if (req.query.limit >= 0) {
      res.json(conversations.slice(0, req.query.limit));
    } else {
      res.json(conversations);
    }
  })
  .catch(next);
});

router.param('id', function (req, res, next, id) {
  Conversation.findById(id)
  .then(conversation => {
    if (!conversation) throw Error(404);
    req.requestedConversation = conversation;
    next();
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.requestedConversation.reload()
  .then(conversation => res.json(conversation))
  .catch(next);
});

module.exports = router;
