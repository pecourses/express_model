//const { BaseError } = require('sequelize/types')

const { Sequelize: { BaseError } } = require('sequelize');

module.exports.sequlaizeErrorHandler = (err, req, res, next) => {
  /*if(err instanceof BaseError){
    console.log('seqBaseError :>> ', err);
    return /*res.status().send({
      data: null,
      errors: [{ title: err?.message ?? 'Internal server error' }],
      meta: null
    });
  }*/
  next(err)
}

module.exports.errorHandler = (err, req, res, next) => {
  res.status(err?.status ?? 500).send({
    data: null,
    errors: [{title:err?.message ?? 'Internal server error'}],
    meta: null
  })
}