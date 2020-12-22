const moment = require('moment');

module.exports.parseTaskDate = (req, res, next) => {
  const {body} = req;
  console.log('val.object :>> ', body);
  req.body.deadline = moment(body.deadline);
  next();
};
