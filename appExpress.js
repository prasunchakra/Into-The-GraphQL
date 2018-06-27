let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});


app.set('views engine','ejs');
app.use('/assets',express.static('assets')); // This is the Middle ware which to map the static files
                                            // Without this file we can't access the static files because they
                                            // don't fall under any routes.


app.get('/example2',function (req,res) {
    res.sendFile(__dirname+'/index.html');
});

app.get('/example1',function (req,res) {
    res.send('This is example page on how to send only text ');
});

app.get('/',function (req,res) {
    res.render('index');
});

app.get('/contacts',function (req,res) {       // Query Strings
    console.log(req.query);
    res.render('contacts',{qs:req.query });
});

app.get('/help',function (req,res) {
    console.log(req.query);
    res.render('help',{qs:req.query });
});

app.post('/help',urlencodedParser,function (req,res) {   // Handling Post Requests
    console.log(req.body);
    res.render('help-success',{data:req.body });
});

app.get('/student/:name',function (req,res) {
    let data = {age: 26,job: 'bekar',hobies:['Eat','Drink','Live']};
   res.render('student',{person:req.params.name, data:data});
});
app.listen(8002);