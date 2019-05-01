require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
const Company = require('./models/company');
const ejs = require('ejs');
const methodOverride = require('method-override')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/driver_management', {useNewUrlParser: true})
.then(() => console.log('mongodb running'),
(err) => console.log(err))


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));


//INDEX
app.get('/company', (req, res) => {
    res.render('index', { company })
  })
  
  //NEW
  app.get('/company/deriver', (req, res) => {
    res.render('new')
  })
  //POST
app.post('/drivers', (req, res) => {
    console.log(req.body)
    if (req.name.drivers === 'on') { 
      req.body.drives = true
    } else {
      req.body.cars = false
    }
    drivers.push(req.name)
    res.redirect('/drivers')
  })
  

