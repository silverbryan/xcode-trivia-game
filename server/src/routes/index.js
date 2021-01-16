const { Router } = require('express');

// const gameRouter = require('./game');
// const questionRouter = require('./question');
// const authRouter = require('./auth');
// const rankingRouter = require('./ranking');
const categoryRouter = require('./category');

const router = Router();
// router.use('/game', gameRouter);
// router.use('/question', questionRouter);
// router.use('/auth', authRouter);
// router.use('/ranking', rankingRouter);
router.use('/category', categoryRouter);

module.exports = router;