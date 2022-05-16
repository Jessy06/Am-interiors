// Validation JOI
const Joi = require("@hapi/joi");

// REGISTER VALIDATION 
const registerValidation = (data) => {
const schema = Joi.object ({
    pseudo:Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})

return schema.validate(data);
}

// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        pseudo:Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });
  
    return schema.validate(data);
  };

// Projet Validation
const projetValidation = (data) => {
    const schema = Joi.object ({
        title:Joi.string().max(20).required(),
        description:Joi.string().min(10).max(250).required(),
        lieu: Joi.string().required()
        // date:Joi.date().required,
    })
    return schema.validate(data);
}

// Projet Validation
const inspirationValidation = (data) => {
    const schema = Joi.object ({
        title:Joi.string().max(20).required(),
        description:Joi.string().min(10).max(250).required(),
        lieu: Joi.string().required(),
        theme: Joi.string().max(15).required()
    })
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.projetValidation = projetValidation;
module.exports.inspirationValidation = inspirationValidation;
