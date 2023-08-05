const Habit = require('../models/habit');


module.exports.create = async function(req ,res){
      console.log(req.body);

      try{

            let habit = await Habit.create({
                   
                   habitData : req.body.habitData, 
                   
            });
            console.log('Habit are created');
            console.log(habit);
            return res.redirect('back');

      }catch(err){   
             console.log(err);
             return res.redirect('back');
      }
};
 
module.exports.destroy = function(req,res){
      console.log(req.query);
      let id=req.query.id;
       
      Habit.findByIdAndDelete(id)
      .then(function(deleteHabit){
          
              if(deleteHabit){
                  console.log("Habit deleted successfully");
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