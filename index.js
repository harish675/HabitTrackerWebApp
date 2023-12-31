const express = require('express');
const  app = express();
const PORT = process.env.PORT || 8000;
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


app.use(express.urlencoded());
app.use(express.static('./asset'));
app.use(expressLayouts);




app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//set the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./router'));
app.listen(PORT, function(err){
 
      if(err){
          console.log("Error in running the server",err);
      }
      
      console.log("Server are running on port :",PORT);
});