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

exports.all = async(req, res, next)=> {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (err) {
       res.status(500).json({error: err.message}); 
    }
    next();
}

exports.single = async(req, res, next)=> {
    const id = req.params.id;
    try {
        const oneUser = await User.findById(id);
        if(!oneUser) {
            return res.status(404).json({error: `No such user with the ID ${id}`});
        }
        res.status(200).json({message: 'User found', data: oneUser});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}