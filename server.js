const express = require('express');
const app = express();
const mongoose = require('mongoose')
// const db = require('./config/db');
const userRouter = require('./router/userRoute');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
// middleware to parse json data
app.use(express.json());
// middleware to parse url encoded data
app.use(express.urlencoded({extended: true}));
// user middleware
app.use('/api', userRouter);

const db = async()=> {
    try {
        await mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database Connected');
    } catch (err) {
        console.log(err);
    }
}
db().then(()=> {
    app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));
})
.catch((err)=> console.log(err))