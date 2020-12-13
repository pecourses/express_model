const { Router } = require('express');
const { userController } = require('./../controllers');

// User 1:n Task

const userRouter = Router();
// '/api/users
userRouter.post('/',userController.createUser);
userRouter.get('/',userController.getAllUsers);

userRouter
  .route('/:userId')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

userRouter.get('/:userId/tasks', userController.getUserTasks)

module.exports = userRouter;