const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router.post('/', userController.create);
Router.get('/', userController.all);

module.exports = Router;