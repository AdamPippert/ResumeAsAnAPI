var express = require('express');
var app = express();

require('./routes')(app);

app.get('/resumes/:name', function(req, res) {

    // Get /resumes/AdamPippert
    console.log(req.params.name)
    // => Adam

    res.send('{"id": 1,"name":"AdamPippert"}');
});


app.get('/', function(req, res) {
    res.send('Resume As An API\nTo use, add /resumes/name for a resume (e.g. "/resumes/AdamPippert")');
});
app.listen(3001);
console.log('Listening on port 3001...');
