const { check, validationResult } = require('express-validator')
const createError = require('http-errors');

const User = require('../../models/People')

const addUserValidators = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("name must alphabet")
    .trim(),

  check("email")
    .isEmail()
    .withMessage("invalid email")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createError('Email already used')
        }
      } catch (error) {
        throw createError(error.message)
      }
    }),

  check("mobile")
    .isMobilePhone("bn-BD", {
      strictMode: true
    })
    .withMessage("mobile number is a must valid bangladeshi")
    .custom(async (value) => {
      try {
        const user = User.findOne({ mobile: value })
        if (user) {
          throw createError("mobile already used")
        }
      } catch (error) {
        throw createError(error.message)
      }
    }),

  check("password")
  .isStrongPassword()
  .withMessage("Must 8 digit and 1 uper 1 lower 1 number 1 spacial digit")
];

const addUserValidationHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
}



module.exports = {
  addUserValidators,
  addUserValidationHandler
}