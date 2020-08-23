const express = require('express')
const cors = require('cors');
var fs = require('fs');
const app = express()
const port = 8080  // 8080 required for Azure monitoring

// allow cross origin requests
app.use(cors());
app.options('*', cors());

// read static .json file into memory for the lifetime of the app
var states = JSON.parse(fs.readFileSync('./states.json', 'utf8'));

app.get('/', (req, res) => res.send('Hello World for GeoJSON Data!'));

//serve the states GeoJson
app.get('/states', (req, res) => {
    console.log("Processing /states request.");
    res.send(states);
});

app.listen(port, () => console.log(`Example data service started!`));