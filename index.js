const express = require('express')
const cors = require('cors');
var fs = require('fs');
const app = express()
const port = 8080  // 8080 required for Azure monitoring

// read static .json file into memory for the lifetime of the app
var states = JSON.parse(fs.readFileSync('./states.json', 'utf8'));

// allow cross origin requests in development
if (process.env.NODE_ENV === 'development') {
    console.log("Setting development service config to allow CORS.")
    app.use(cors());
    app.options('*', cors());
}

app.get('/', (req, res) => res.send('Hello World!'));

//serve the states GeoJson
app.get('/states', (req, res) => {
    console.log("Processing /states request.");
    res.send(states);
});

app.listen(port, () => console.log(`Example data service started!`))