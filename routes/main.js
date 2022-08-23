const express = require('express')
const axios = require('axios')
const newsr=express.Router()

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// wish list page
app.get('/wish', function(req, res) {
    res.render('pages/wish');
  });

  // library page
app.get('/library', function(req, res) {
    res.render('pages/library');
  });