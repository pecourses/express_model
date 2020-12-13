const { Router } = require('express');
const taskRouter = require('./routers/taskRouter')
const userRouter = require('./routers/userRouter')

const router = Router();
// '/api/tasks'
router.use('/tasks', taskRouter);
// '/api/users'
router.use('/users', userRouter);

module.exports = router;