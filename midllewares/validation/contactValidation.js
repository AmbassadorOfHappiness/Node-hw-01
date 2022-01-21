const Joi = require("joi");
const { Types } = require("mongoose");
const { HttpCode } = require('../../config/constants');

const createSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool().optional(),
})

const updateSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().optional(),
  favorite: Joi.bool().optional(),
}).or('name', 'email', 'phone', 'favorite');

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
})

const regLimit = /\d+/

const querySchema = Joi.object({
  limit: Joi.string().pattern(regLimit).optional(),
  skip: Joi.number().min(0).optional(),
  sortBy: Joi.string().valid('name', 'email', 'phone', 'favorite').optional(),
  sortByDesc: Joi.string().valid('name', 'email', 'phone', 'favorite').optional(),
  filter: Joi.string()
    .pattern(new RegExp('(name|email|phone|favorite)\\|?(name|email|phone|favorite)+'))
    .optional(),
})

const validateCreate = async ( req, res, next ) => {
  try {
    await createSchema.validateAsync(req.body)
  } catch (err) {
    return res
    .status(HttpCode.BAD_REQUEST)
    .json({message: `Field ${err.message.replace(/"/g, '')}`})
  }
  next();
}

const validateUpdate = async ( req, res, next ) => {
  try {
    await updateSchema.validateAsync(req.body)
  } catch (err) {
    const [{ type }] = err.details;
    if (type === 'object.missing') {
      return res.status(HttpCode.BAD_REQUEST).json({message: 'Missing field favorite'})
    }
    return res.status(HttpCode.BAD_REQUEST).json({message: err.message})
  }
  next();
}

const validateId = async (req, res, next) => {
  if (!Types.ObjectId.isValid(req.params.id)) {
    return res
      .status(HttpCode.BAD_REQUEST)
      .json({ message: 'Invalid ObjectId' })
  }
  next()
}

const validateUpdateFavorite = async (req, res, next) => {
  try {
    await updateFavoriteSchema.validateAsync(req.body)
  } catch (err) {
    const [{ type }] = err.details
    if (type === 'object.missing') {
      return res.status(HttpCode.BAD_REQUEST).json({ message: 'Missing field favorite' })
    }
    return res.status(HttpCode.BAD_REQUEST).json({ message: err.message })
  }
  next()
}

const validateQuery = async (req, res, next) => {
  try {
    await querySchema.validateAsync(req.query)
  } catch (err) {
    return res
      .status(HttpCode.BAD_REQUEST)
      .json({ message: `Field ${err.message.replace(/"/g, '')}` })
  }
  next()
}

module.exports = {
  validateCreate,
  validateUpdate,
  validateUpdateFavorite,
  validateId,
  validateQuery
};