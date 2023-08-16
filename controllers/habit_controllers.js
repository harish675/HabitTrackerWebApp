const Habit = require('../models/habit');
const DailyTask = require('../models/daily_task');

//create habit
module.exports.create = async function(req ,res){
      console.log(req.body);

      try{
            let habit = await Habit.create({   
                   name : req.body.name, 
                   completed:null,
                   createdAt:new Date()
            });

            habit = await habit.populate('dailyTask').execPopulate();
            return res.redirect('back');

      }catch(err){   
             console.log(err);
             return res.redirect('back');
      }
};

//delete or remove habit 

module.exports.destroy = function(req,res){
      // console.log(req.query);
      let id=req.query.id;
       
      Habit.findByIdAndDelete(id)
      .then(function(deleteHabit){
              if(deleteHabit){
                  console.log("Habit deleted successfully");
                    DailyTask.deleteMany({habit:id});
                  return res.redirect('back');


              }
              else{
                  console.log('Habit Not found for deleting');
              }    
      }).catch((err)=>{
             console.log('error in deleting habit');
             return res.redirect('back');
      })
}

