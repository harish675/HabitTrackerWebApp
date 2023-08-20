 
 
const  mongoose = require('mongoose');

mongoose.connect('mongodb+srv://habit:habit@cluster0.ikrv633.mongodb.net/habit');

const db =  mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
       
       console.log('connected to Database:: MongoDB');
});

module.exports = db;