const Habit = require("../models/habit");

module.exports.homePage = function(req, res){    
         
        Habit.find({})
        .then((habits)=>{
             
              return res.render('home',{
                 
                    title:'Habit Tracker',
                    habits_List:habits
              })
             
        }).catch((err)=>{
              
             console.log('error i fetching habits list',err);
             return res.status(500).send('Internal Server Error');
             
        });  
      
   
      

}