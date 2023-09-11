const express = require('express');
const app = express();
const db = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
db();

const PORT = process.env.PORT;


app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));