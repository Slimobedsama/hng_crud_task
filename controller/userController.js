const User = require('../model/userModel');
const validator = require('validator');

exports.create = async(req, res, next)=> {
    const {name} = req.body;
    try {
        if(validator.isEmpty(name)) {
            throw new Error('Please enter a name');
        } else if(!validator.isAlpha(name, 'en-GB', {ignore: ' '})) {
            throw new Error('Name must be a string');
        }
        const newUser = await User.create(req.body);
        return res.status(201).json({message: 'New user created', data: newUser});
    } catch (err) {
        console.log(err.message);
        res.status(400).json({error: err.message});
    }
    next()
}