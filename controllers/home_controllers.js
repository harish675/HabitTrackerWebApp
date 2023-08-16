const Habit = require("../models/habit");
const DailyTask = require('../models/daily_task');

module.exports.homePage = function(req, res){    
         
        Habit.find({})
        .sort('-createdAt')
        .then((habits)=>{   
              console.log('habit:',habits);   
              console.log('habits:',habits.dailyTask);
              return res.render('home',{
                    title:'Habit Tracker',
                    habits_List:habits
              })
             
        }).catch((err)=>{
              
             console.log('error i fetching habits list',err);
             return res.status(500).send('Internal Server Error');
             
        });     

}
