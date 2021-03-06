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
        descriptionFR:Joi.string().min(3).max(250).required(),
        descriptionEN:Joi.string().min(3).max(250).required(),
        lieu: Joi.string().required(),
        images:Joi.string()
    })
    return schema.validate(data);
}

// Inspiration Validation
const inspirationValidation = (data) => {
    const schema = Joi.object ({
        title:Joi.string().max(20).required(),
        descriptionFR:Joi.string().min(3).max(250).required(),
        descriptionEN:Joi.string().min(3).max(250).required(),
        lieu: Joi.string().required(),
        theme: Joi.string().max(15).required()
    })
    return schema.validate(data);
}

// Presentation Validation
const presentationValidation = (data) => {
    const schema = Joi.object ({
        titleFR:Joi.string().max(20).required(),
        descriptionFR:Joi.string().min(3).max(250).required(),
        titleEN:Joi.string().max(20).required(),
        descriptionEN:Joi.string().min(3).max(250).required(),
       
    })
    return schema.validate(data);
}
// Contact Validation
const serviceValidation = (data) => {
    const schema = Joi.object ({
        titleServiceFR:Joi.string().min(3).max(250).required(),
        titleServiceEN:Joi.string().min(3).max(250).required(),
        descriptionServiceEN:Joi.string().min(10).max(250).required(),
        descriptionServiceFR:Joi.string().min(10).max(250).required(),
       
    })
    return schema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.projetValidation = projetValidation;
module.exports.inspirationValidation = inspirationValidation;
module.exports.presentationValidation = presentationValidation;
module.exports.serviceValidation = serviceValidation;