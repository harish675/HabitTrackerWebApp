
const DailyTask = require('../models/daily_task');
const Habit = require('../models/habit');


//habit completed
module.exports.createForDone = async function (req,res){
  try{
       const habit = await Habit.findById(req.query.id);
       if(!habit){
         console.log('habit not found');
         return res.redirect('back');
       }   
           //it converts date into human readable format
           const currentDate = new Date();
           const formattedDate = currentDate.toDateString();
           const parts = formattedDate.split(' ');
           const newDate = parts.slice(1).join(' ');
           
          //created daily task for the storing daily track of habit
          let task = await DailyTask.create({
                date:newDate,
                habit:req.query.id,
                completed:true,
          });
          
          habit.dailyTask.push(task);
          await habit.save();
          task = await task.populate('completed','date');
          return res.redirect('back');  
  }
  catch(err){     
       console.log('error in finding the habit',err);
       return res.redirect('back');
  }  
};

//habit not completed
module.exports.createForNotDone = async function (req,res){
  try{
       const habit = await Habit.findById(req.query.id);
       if(!habit){
         console.log('habit not found');
         return res.redirect('back');
       }   
           //it converts date into human readable format
           const currentDate = new Date();
           const formattedDate = currentDate.toDateString();
           const parts = formattedDate.split(' ');
           const newDate = parts.slice(1).join(' ');
           
          //created daily task for the storing daily track of habit
          let task = await DailyTask.create({
                date:newDate,
                habit:req.query.id,
                completed:false,
          });
          
          habit.dailyTask.push(task);
          await habit.save();
          task = await task.populate('completed','date');
          return res.redirect('back');  
  }
  catch(err){     
       console.log('error in finding the habit',err);
       return res.redirect('back');
  }  
};

//habit are skipped
module.exports.createForSkip = async function (req,res){
    try{
         const habit = await Habit.findById(req.query.id);
         if(!habit){
           console.log('habit not found');
           return res.redirect('back');
         }   
             //it converts date into human readable format
             const currentDate = new Date();
             const formattedDate = currentDate.toDateString();
             const parts = formattedDate.split(' ');
             const newDate = parts.slice(1).join(' ');
             
            //created daily task for the storing daily track of habit
            let task = await DailyTask.create({
                  date:newDate,
                  habit:req.query.id,
                  completed:null,
            });
            
            habit.dailyTask.push(task);
            await habit.save();
            task = await task.populate('completed','date');
            return res.redirect('back');  
    }
    catch(err){     
         console.log('error in finding the habit',err);
         return res.redirect('back');
    }  
};

module.exports.markAsCompleted = async function(req,res){

  //find the task to update
      try{     
              let task = await DailyTask.findByIdAndUpdate(req.query.id);
              if(task){
                  
                  task.completed = true; 
                  task.save();
                  return res.redirect('back');
              }

              return res.redirect('back');
                           
      }catch(err){ 
         console.log('Error in',err);
         return res.redirect('back');
      }
  
};
module.exports.markAsNotCompleted = async function(req,res){ 

  //find the task to update
 try{     
         let task = await DailyTask.findByIdAndUpdate(req.query.id);
         if(task){
             
             task.completed = false; 
             task.save();
             return res.redirect('back');
         }

         return res.redirect('back');                   
 }catch(err){ 
    console.log('Error in',err);
    return res.redirect('back');
 }
};

module.exports.skip =  async function(req,res){  
  try{     
    let task = await DailyTask.findByIdAndUpdate(req.query.id);
    if(task){
        
        task.completed = null; 
        task.save();
        return res.redirect('back');
    }

    return res.redirect('back');                   
}catch(err){ 
console.log('Error in',err);
return res.redirect('back');
} 
};

