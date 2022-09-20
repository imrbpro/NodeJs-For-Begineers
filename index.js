//Installed ExpressJs Framework for Modularity
const express = require('express');
//Using express
const app = express();

// Assiging port to the application
const PORT = process.env.PORT || 2022;

//using environment port
app.listen(PORT, ()=> {console.log(`The App is running on port : ${PORT}`)})