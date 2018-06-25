let http = require('http');
let t = 0;
let t2 = 0;

// 1
setTimeout(function () {
    t2 = t2+ 30;
    console.log("3000 mili Seconds have passed since the server started");
},3000);

// 2
let timer = setInterval(function () {
    t=t+4;
    console.log(t + "Seconds have passed");
    if (t>t2){
        clearInterval(timer);
    }
},4000);

// 5: Function as an argument
function f(f1,f2){
    f2();
    f1();
}
// 3: Normal Function Statement
function f1() {
    console.log("Normal Function: " + __dirname);
}

// 4: Function Expression
let f2 = function () {
    console.log("Function Expression : "+__filename);
};

f(f1,f2);

//6: Server Creation
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hell O World!');
}).listen(8080);
console.log('Server Running at http://localhost:8080/');