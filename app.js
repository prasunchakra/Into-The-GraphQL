let mymodule = require('./mymodule');
let events = require('events');
let filep = require('fs');


console.log(mymodule.counter(['prasun','chakraborty']) );
console.log(mymodule.myDateTime());
console.log(mymodule.adder(3,7) );

let myEmmiter = new events.EventEmitter();

myEmmiter.on('someEvent', function (msg) {
    console.log('\n');
    console.log(msg);
    console.log('\n');
});


let body = 'Learning Node js  from the Net Ninja in Youtube';
//filep.writeFileSync('TestFile.txt',body);

filep.mkdir('NewDir',function (err,data) {
    filep.readFile('TestFile.txt','utf8',function (err,data) {
        filep.writeFile('./NewDir/NewTest.txt',data);
    })
});

myEmmiter.emit('someEvent',body);
