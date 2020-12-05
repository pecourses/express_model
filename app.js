const express = require('express');
const {validateTask} = require('./middleware');
const {taskController} = require('./controllers');

const app = express();

app.use(express.json()); //built-in body-parser

// create task
app.post('/task', validateTask.validateOnCreate, taskController.createTask);

// read tasks
app.get('/tasks', taskController.getAllTasks);

app
  .route('/tasks/:taskId')
  .get(taskController.getTask)
  .patch(validateTask.validateOnUpdate)
  .delete();

// error handler
app.use((err,req,res,next)=>{
  res.status(err?.status ?? 500).send({
    message: err?.message ?? 'Internal server error'
  })
})

module.exports = app;