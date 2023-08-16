
//display all days of list 

const DailyTask = require('../models/daily_task');
const Habit = require('../models/habit');

 module.exports.weekDetailsPage = async function(req,res){
        
         try{

            let habits = await Habit.find({})
            .sort('-createdAt:-1')
            .populate({
                path:'dailyTask',
                options: {
                        sort: { createdAt: -1 } // Sort daily tasks by createdAt in descending order
                    },
            });

            if(!habits){
                    console.log('habit not found',err);
                    return res.redirect('back');             
            }
            res.render('week',{
                    title :'week details',
                    habits:habits,
            });
    
         }catch(err){
             
            console.log('error in finding Habit',err);
            return res.redirect('back'); 
         }

}
  