const express = require('express');
const app = express()
const db = require('./config/db');
const userRouter = require('./router/userRoute');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
// middleware to parse json data
app.use(express.json());
// middleware to parse url encoded data
app.use(express.urlencoded({extended: true}));
// user middleware
app.use('/api', userRouter);
// parsing the listen method to the database
db().then(()=> {
    app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));
})
.catch((err)=> console.log(err))