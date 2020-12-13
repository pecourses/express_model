const express = require('express');
const { errorHandlers, validateTask } = require('./middleware');
const { taskController } = require('./controllers');

const app = express();

app.use(express.json({ type: 'application/vnd.api+json'})); //built-in body-parser

// create task
app.post('/task', validateTask.validateOnCreate, taskController.createTask);

// read tasks
app.get('/tasks', taskController.getAllTasks);

app
  .route('/tasks/:taskId')
  .get(taskController.getTask)
  .patch(validateTask.validateOnUpdate, taskController.updateTask)
  .delete(taskController.removeTask);

  

// error handler
//app.use(errorHandlers.sequelizeErrorHandler, errorHandlers.errorHandler);

module.exports = app;