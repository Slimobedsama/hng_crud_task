const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router.post('/', userController.create);

module.exports = Router;