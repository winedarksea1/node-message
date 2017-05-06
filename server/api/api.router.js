var router = require('express').Router();
var userRouter = require('./users/user.router');
var conversationRouter = require('./conversations/conversation.router');
var messageRouter = require('./messages/message.router');

router.use('/users', userRouter);
router.use('/conversations', conversationRouter);
router.use('/messages', messageRouter);

module.exports = router;
