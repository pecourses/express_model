const { User, Task } = require('./../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  //console.log('body :>> ', body);
  try {
    const createdUser = await User.create(body);
    //console.log('createdTask :>> ', createdUser.get());
    res.status(201).send(createdUser.get())
  }
  catch (err) {
    next(err)
  }
}

module.exports.getUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  try {
    const getUs = await User.findByPk(userId, {
      attributes: {
        exclude:
          ['passwordHash', 'createdAt', 'updatedAt']
      }
    });
    if (getUs) {
      return res.status(200).send({ data: getUs });
    }
    res.status(404).send('User not found');
  } catch (err) {
    next(err);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const getUss = await User.findAll({
      attributes: {
        exclude:
          ['id','passwordHash', 'createdAt', 'updatedAt']
      }
    });
    return res.status(200).send({ data: getUss });
  
  } catch (err) {
    next(err);
  }
 }

module.exports.createUserTask = async (req, res, next) => {
  const {
    body, params: { userId }
  } = req;
  console.log('body :>> ', body);
  console.log('userId :>> ', userId);
  try {
    const foundUser = await User.findByPk(userId);
    console.log('foundUser :>> ', foundUser);
    if (foundUser) {
      const createdTask = await Task.create(body);
      console.log('createdTask :>> ', createdTask);
      const userTask = await foundUser.addTask(createdTask);
      return res.status(201).send({ data: createdTask });
    }
    res.status(404).send('User not found');
  }
  catch (err) {
    next(err)
  }
}

module.exports.getUserTasks = async (req, res, next) => { }

module.exports.updateUser = async (req, res, next) => {
  const {
    body, params: { userId }
  } = req;
  try {
    const foundUser = await User.findByPk(userId);
    //console.log('foundTask :>> ', foundTask);
    if (foundUser) {
      const updatedUser = await foundUser.update(body);
      return res.status(200).send(updatedUser);
    }
    res.status(404).send('User not found');
  }
  catch (err) {
    next(err);
  }
 }

module.exports.deleteUser = async (req, res, next) => { }