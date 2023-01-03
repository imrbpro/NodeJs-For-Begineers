//Installed ExpressJs Framework for Modularity
const express = require('express');

//Using express
const app = express();

//using json middleware from express for parsing of data
app.use(express.json());
// {
// //Step 0 : configuring express middleware  "express.static"  to serve static html files
// app.use(express.static('public'));

// //Initial Page Setup For Display
// app.get('/',function(req,res){
//   res.set({
//      'Access-control-Allow-Origin': '*'
//   });
//   return res.redirect('home.html');
// })

// //*********************************** mongo db with express step by step *********************************** 

// //step 1 : installed mongoose using npm install mongoose --save

// //step 2 : now using mongoose 
// const mongoose = require('mongoose');

// //step 3 : configuring mongoose with my localhost mongodb url and connecting to database using connect function from mongoose
// mongoose.connect('mongodb://localhost:1080/DemoDB');

// //step 4 : getting connection
// var db = mongoose.connection;

// //step 5 : checking error whilte establishing connection to mongodb
// db.on('error', console.log.bind(console,"Connection not established... Error Occured."));

// //step 6 : opening connection
// db.once('open', (callback) => {
//   console.log('Connection Open Success..')
// });

// //step 7 : Making Basic Signup POST API for registering a user in mongodb database
// app.post('/sign_up', function(req,res){
//   var name = req.body.name;
//   var email =req.body.email;
//   var pass = req.body.password;
//   var phone =req.body.phone;

//   var data = {
//      "name": name,
//      "email":email,
//      "password":pass
//   }
//   db.collection('details').insertOne(data,function(err, collection){
//   if (err) throw err;
//      console.log("Record inserted Successfully");
//   });
//   return res.redirect('success.html');
// }) 

// }

// Assiging port to the application

const userRoute = require('./routes/user');

app.use('/user',userRoute);



const PORT = process.env.PORT || 2022;

//using environment port
app.listen(PORT, ()=> {console.log(`The App is running on port : ${PORT}`)})