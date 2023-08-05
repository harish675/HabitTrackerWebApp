
module.exports.homePage = function(req, res){    
    

     res.render('home',{
             title :'Habit Tracker',
             page:'homepage'
     });
}