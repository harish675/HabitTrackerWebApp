
const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
     
      habitData:{
         type:String,
         require:true
      },
      time:{
           type:Time,
           require:true
      },
      totalDays:{
          type:Number,
      },
      completedDays:{
           type:Number,
      }
},{
      timestamps:true,
});

const Habit = mongoose.model('Habit',habitSchema);

module.exports = Habit;