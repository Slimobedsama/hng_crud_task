const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router.post('/', userController.create);
Router.get('/', userController.all);
Router.get('/:id', userController.single);
Router.patch('/:id', userController.modify);
Router.delete('/:id', userController.remove);

module.exports = Router;