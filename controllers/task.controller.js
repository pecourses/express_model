const Task = require('./../models');

module.exports.createTask=async (req,res,next)=>{
  const {body}= req;
  //console.log('body :>> ', body);
  try {
    const createdTask = await Task.create(body);
    res.status(201).send(createdTask)
  }
  catch(err){
    next(err)
  }
}

module.exports.getTask = async (req, res) => {
  const {params:{taskId}} = req;
  try {
    const foundTask = await Task.findById(taskId)
    if(foundTask){
      return res.status(200).send(foundTask);
    }
    res.status(404).send('The task not found');
  }
  catch(err){
    next(err)
  }
}

module.exports.getAllTasks = async (req, res, next) => {
  try { 
    const foundTasks = await Task.findAll();
    res.status(200).send(foundTasks);
  }
  catch(err){
    next(err)
  }

 }
module.exports.updateTask = (req, res) => { }
module.exports.removeTask = (req, res) => { }
