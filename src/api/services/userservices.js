const User = require('../models/userschema');

exports.SignupService = (body) => {
    const { name, email, password, username} = body;
    return new Promise((resolve, reject) => {
        const newUser = new User({name, email, password, username});
        newUser.save()
            .then(user => resolve(user))
            .catch(err => reject(err));
    });
}