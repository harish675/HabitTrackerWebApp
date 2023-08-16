const mongoose = require("mongoose");


const dailyTaskSchema = new mongoose.Schema({
        
        //daily task belongs to the habit
        habit:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Habit',
        } ,
        date:{
             type:String,
        },
        completed:{
              type:Boolean,
        },     
      
},{
     timestamps:true,
})

const DailyTask = mongoose.model('DailyTask',dailyTaskSchema);
module.exports = DailyTask;