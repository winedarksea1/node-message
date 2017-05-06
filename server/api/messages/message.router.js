var router = require('express').Router();
var Message = require('./message.model');

router.get('/', function (req, res, next) {
  Message.findAll()
  .then(messages => {
    if (req.query.limit >= 0) {
      res.json(messages.slice(0, req.query.limit));
    } else {
      res.json(messages);
    }
  })
  .catch(next);
});

router.param('id', function (req, res, next, id) {
  Message.findById(id)
  .then(message => {
    if (!message) throw Error(404);
    req.requestedMessage = message;
    next();
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.requestedMessage.reload()
  .then(message => res.json(message))
  .catch(next);
});

module.exports = router;
