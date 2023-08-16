
const mongoose = require('mongoose');

const  habitSchema = new mongoose.Schema({
     
       name:{
          type:String,
          require:true
       },
       completed:{
           type:Boolean,
       },
       dateCreated:{
          type:String,
       },

       dailyTask:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"DailyTask",
        }
       ]

},{
      
     timestamp:true,
     
});
const Habit = mongoose.model('Habit',habitSchema);

module.exports = Habit;