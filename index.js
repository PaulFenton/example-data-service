const express = require('express')
var fs = require('fs');
const app = express()
const port = 8080  // 8080 required for Azure monitoring

// read static .json file into memory for the lifetime of the app
var states = JSON.parse(fs.readFileSync('./states.json', 'utf8'));

app.get('/', (req, res) => res.send('Hello World!'));

//serve the states GeoJson
app.get('/states', (req, res) => {
    console.log("Processing /states request.");
    res.send(states);
});

var msg = `Example data service started!`;
app.listen(port, () => console.log(msg))