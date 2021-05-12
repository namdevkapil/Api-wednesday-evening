const {
    SignupService
} = require('../services/userservices');


exports.HomepageController = (req, res, next) => {
    res.status(200).json({message: 'This is Homepage'});
};

exports.SignupController = (req, res, next) => {
    SignupService(req.body)
        .then( user => res.status(201).json({user}))
        .catch(err => res.status(201).json({err}) );
};