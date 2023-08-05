const express = require('express');
const  app = express();
const port = 8000;
const router = express.Router();
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use('/',require('./router'));

//set the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
 
      if(err){
          console.log("Error in running the server",err);
      }

      console.log("Server are running on port :",port);
});