var router = require('express').Router();
var User = require('./user.model');

router.get('/', function (req, res, next) {
  User.findAll()
  .then(users => {
    if (req.query.limit >= 0) {
      res.json(users.slice(0, req.query.limit));
    } else {
      res.json(users);
    }
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
