const { Router } = require('express');
const { validateTask } = require('./../middleware');
const { taskController } = require('./../controllers');

const taskRouter = Router();
// '/api/tasks

// create task
taskRouter.post('/',
  validateTask.validateOnCreate,
  taskController.createTask);

// read tasks
taskRouter.get('/', taskController.getAllTasks);

taskRouter
  .route('/:taskId')
  .get(taskController.getTask)
  .patch(validateTask.validateOnUpdate, taskController.updateTask)
  .delete(taskController.removeTask);

module.exports = taskRouter;