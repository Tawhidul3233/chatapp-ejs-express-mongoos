const createError = require('http-errors')
const { models } = require('mongoose')

// 404 not found handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, 'content not found'))
}

// default error
const errorHandler = (err, req, res, next) => {
  res.locals.title = process.env.NODE_ENV === 'development' ? ' development Yes there was an error' : ' production Yes there was an error'
  
  res.render('error')
}

module.exports = {
  notFoundHandler,
  errorHandler
}