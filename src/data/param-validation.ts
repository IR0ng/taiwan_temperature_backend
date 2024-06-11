import Joi from 'joi'

export default {
  guestData: Joi.object({
    body: Joi.object().keys({
      userName: Joi.string().regex(/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/).required().min(5).max(30).lowercase(),
      password: Joi.string().min(8).max(30).required(),
      email: Joi.string().email().trim().required().max(254).messages({
        'string.base': '{{#key}} should be a type of email',
        'string.max': '{{#key}} have a maximum length of {{#limit}}',
        'string.empty': '{{#key}} cannot be an empty field',
        'string.email': '{{#key}} type is incorrect',
        'any.required': '{{#key}} is a required field'
      }),
      avatar: Joi.array().required(),
      verifyPhoto: Joi.array().required()
    })
  }),

  account: Joi.object({
    body: Joi.object().keys({
      userName: Joi.string().regex(/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/).required().min(5).max(30),
      email: Joi.string().email().trim().required().max(254).messages({
        'string.base': '{{#key}} should be a type of email',
        'string.max': '{{#key}} have a maximum length of {{#limit}}',
        'string.empty': '{{#key}} cannot be an empty field',
        'string.email': '{{#key}} type is incorrect',
        'any.required': '{{#key}} is a required field'
      })
    })
  }),

  praise: Joi.object({
    body: Joi.object().keys({
      isLike: Joi.boolean().required()
    })
  }),

  pagination: Joi.object({
    body: Joi.object().keys({
      count: Joi.number().max(30).required()
    })
  }),

  updateAvatar: Joi.object({
    body: Joi.object().keys({
      avatar: Joi.array().required()
    })
  }),

  updateEmail: Joi.object({
    body: Joi.object().keys({
      email: Joi.string().email().trim().required().max(254).messages({
        'string.base': '{{#key}} should be a type of email',
        'string.max': '{{#key}} have a maximum length of {{#limit}}',
        'string.empty': '{{#key}} cannot be an empty field',
        'string.email': '{{#key}} type is incorrect',
        'any.required': '{{#key}} is a required field'
      })
    })
  }),

  updateVerifyPhoto: Joi.object({
    body: Joi.object().keys({
      warningId: Joi.string().uuid({ version: 'uuidv4' }),
      verifyPhoto: Joi.array().required()
    })
  })
}
