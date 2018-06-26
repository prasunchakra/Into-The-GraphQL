let fs = require('fs');
let http = require('http')
//let myReadStream = fs.createReadStream(__dirname+ '/largefile.txt');
//let myWriteStream= fs.createWriteStream(__dirname+ '/largefile_copy.txt');

/*
// this is what pipe do
myReadStream.on('data',function (chunk) {
    console.log('New chunk of data received');
    myWriteStream.write(chunk);
});
*/

let Server1 = http.createServer(function (req,res) {

    console.log('Request was made ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/text'});
    let myReadStream = fs.createReadStream(__dirname+ '/largefile.txt');
    myReadStream.pipe(res);

}).listen(8000);
console.log('Server Running at http://localhost:8000/');

let Server2 = http.createServer(function (req,res) {
    console.log('Request was made ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    let myObj = { "name":"John", "age":31, "city":"New York" };
    res.end(JSON.stringify(myObj));

}).listen(8001);
console.log('Server Running at http://localhost:8001/');