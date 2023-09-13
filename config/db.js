const mongoose = require("mongoose")

const db = async()=> {
    try {
        await mongoose.connect(process.env.DBURI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database Connected');
    } catch (err) {
        console.log(err);
    }
}
module.exports= db;