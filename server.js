const express = require('express');
const hbs = require( 'express-handlebars');
const bodyParser = require('body-parser')
const Thermostat = require('./lib/thermostat');

let thermostat = new Thermostat()

const port = process.env.PORT || 3000

// create a new express app:
const app = express()

// turn forms in requests to something we can work with:
app.use(bodyParser.urlencoded({ extended: true }))

// serve everything in the public directory:
app.use(express.static('public'))

app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

app.get('/', function(req, res, next) {
    let powerSaving = thermostat.isPowerSavingActive()  === true ? "On" : "Off"; 

    res.render('index', 
        { 
            temperature: thermostat.getCurrentTemperature(), 
            powerSaving: powerSaving
        }
    );
});

app.get('/raise', (req, res) => {
    thermostat.up();
    res.redirect('/');
});

app.get('/decrease', (req, res) => {
    thermostat.down();
    res.redirect('/');
});

app.get('/switch', (req, res) => {
    thermostat.switchMode();
    res.redirect('/');
});

// start the app!
app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port)
})