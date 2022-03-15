
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

// ID check router - with anotation
router.get('/id-check-type/', function (req, res) {

  var idCheckType = req.session.data['id-check-type']
  // create a variable called 'idCheckType' and give it the session data for data object 'id-check-type'
  console.log(`idCheckType = ${idCheckType}`);
  // log and name the input held in the variable 'idCheckType'
  if (idCheckType === 'face') {
    res.redirect('apply-for-a-nino/face')
    // if variable 'idCheckType' is equal value and equal type to 'face' go to face2face branch
  } else {
    res.redirect('apply-for-a-nino/remotely')
    // else go to Remotely branch
  }
})

// decison router
router.get('/decision/', function (req, res) {
  var decision = req.session.data['decision']
  console.log(`decision = ${decision}`);
  if (decision === 'allocated') {
    res.redirect('apply-for-a-nino/allocated')
  } else if (decision === 'refused') {
    res.redirect('apply-for-a-nino/refused-reason')
  } else if (decision === 'traced') {
    res.redirect('apply-for-a-nino/traced')
  } else {
    res.redirect('apply-for-a-nino/upgraded')
  }
})


// refused-reason router
router.get('/refused-reason/', function (req, res) {
  var refusedReason = req.session.data['refused-reason']
  console.log(`refusedReason = ${refusedReason}`);
  if (refusedReason === 'busneed') {
    res.redirect('apply-for-a-nino/decline-no-bus-need')
  } else if (refusedReason === 'id') {
    res.redirect('apply-for-a-nino/no-id')
  } else if (refusedReason === 'rtw') {
    res.redirect('apply-for-a-nino/no-rtw')
  } else if (refusedReason === 'rtr') {
    res.redirect('apply-for-a-nino/no-rtr')
  } else {
    res.redirect('apply-for-a-nino/failure')
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
