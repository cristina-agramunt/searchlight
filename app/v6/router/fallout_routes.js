
// Based on search_routes.js

var express = require('express')
var router = express.Router()

// var bsFunctions = require('../functions/bsFunctions.js');


// EXAMPLE ROUTE
// router.get('/search-v1', function (req, res) {
//   res.render('search/search-v1.njk')
// })

router.get('/beans', function(req, res) {
    res.render('fallout/results-01');
});

// account belongs router - with anotation
router.get('/account-belongs-answer/', function (req, res) {

  var accountBelongs = req.session.data['account-belongs']
  // create a variable called 'accountBelongs' and give it the session data for data object 'account-belongs'
  console.log(`accountBelongs = ${accountBelongs}`);
  // log and name the input held in the variable 'accountBelongs'
  if (accountBelongs === 'agree') {
    res.redirect('./fallout/new-account')
    // if variable 'accountBelongs' is equal value and equal type to 'agree' go to new account screen
  } else {
    res.redirect('./fallout/search-01')
    // else go to search-01 screen
  }
})

// compare account belongs router - this removes Lucy
router.get('/compare-account-belongs-answer/', function (req, res) {
  var compareAccountBelongs = req.session.data['compare-account-belongs']
  console.log(`compareAccountBelongs = ${compareAccountBelongs}`);
  if (compareAccountBelongs === 'yes') {
    res.redirect('./fallout/matched')
  } else if (compareAccountBelongs === 'no') {
    res.redirect('./fallout/results-02')
  } else {
    res.redirect('./fallout/not-confident')
  }
})

// compare account belongs router - this removes Meisau
router.get('/compare-account-belongs-answer-meisau/', function (req, res) {
  var compareAccountBelongs = req.session.data['compare-account-belongs']
  console.log(`compareAccountBelongs = ${compareAccountBelongs}`);
  if (compareAccountBelongs === 'yes') {
    res.redirect('./fallout/matched')
  } else if (compareAccountBelongs === 'no') {
    res.redirect('./fallout/results-03')
  } else {
    res.redirect('./fallout/not-confident')
  }
})

// account-answer route for fallout-three
router.get('/account-question/', function (req, res) {
  var accountQuestion = req.session.data['account-question']
  console.log(`accountQuestion = ${accountQuestion}`);
  if (accountQuestion === 'yes') {
    res.redirect('./fallout_three/enter-nino')
  } else if (accountQuestion === 'no') {
    res.redirect('./fallout_three/new-account')
  } else {
    res.redirect('./fallout_three/hold-question')
  }
})

// account-answer route for fallout-three
router.get('/hold-question/', function (req, res) {
  var holdQuestion = req.session.data['hold-question']
  console.log(`holdQuestion = ${holdQuestion}`);
  if (holdQuestion === 'yes') {
    res.redirect('./fallout_three/dash-held')
  } else {
    res.redirect('./fallout_three/not-confident')
  }
})


module.exports = router
