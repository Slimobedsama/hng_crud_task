const User = require('../model/userModel');

exports.create = async(req, res)=> {
    try {
        const newUser = await User.create();
        if(!newUser) {
            throw new Error('Bad Request');
        }
        res.status(201).json({message: 'New user created', data :newUser});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}