//init HTTP module for creating a node server
const http = require('http');
//creating a node server to listen request and provide response
const server = http.createServer((req,res) => {
if(req.url == "/"){
    res.write('Welcome to Homepage')
}
if(req.url == '/about'){
    res.write('This is about page');
}
});
//assigning port to server to access this application over the browser
server.listen(2022);
console.log('listening on port 2022 bcz the year we started this course is 2022 :P ...');