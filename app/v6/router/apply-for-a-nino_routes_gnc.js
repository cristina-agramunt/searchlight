
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
router.get('/app-ref-no/', function (req, res) {

  var appRefNo = req.session.data['app-ref-no']
  // create a variable called 'idCheckType' and give it the session data for data object 'id-check-type'
  console.log(`app-ref-no = ${appRefNo}`);
  // log and name the input held in the variable 'idCheckType'
  if (appRefNo === 'pass') {
    res.redirect('apply-for-a-nino-1/long-application-details')
    // if variable 'idCheckType' is equal value and equal type to 'face' go to face2face branch
  } else {
    res.redirect('apply-for-a-nino-1/application-details')
    // else go to Remotely branch
  }
})

// decison router
router.get('/decision-gnc/', function (req, res) {
  var decision = req.session.data['decision']
  console.log(`decision = ${decision}`);
  if (decision === 'allocated') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/allocated')
  } else if (decision === 'refused') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/refused-reason')
  } else if (decision === 'traced') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/traced')
  } else if (decision === 'info-initial') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/info-initial')
  } else if (decision === 'info-reminder') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/info-reminder')
  } else {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/upgraded')
  }
})


// refused-reason router
router.get('/refused-reason-gnc/', function (req, res) {
  var refusedReason = req.session.data['refused-reason']
  console.log(`refusedReason = ${refusedReason}`);
  if (refusedReason === 'busneed') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/refused-no-bus-need')
  } else if (refusedReason === 'id') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/refused-no-id')
  } else if (refusedReason === 'rtw') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/refused-no-rtw')
  } else if (refusedReason === 'rtr') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/refused-no-rtr')
  } else {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/refused-failure')
  }
})


// further info router
router.get('/contacted-gnc/', function (req, res) {
  var contacted = req.session.data['contacted']
  console.log(`contacted = ${contacted}`);
  if (contacted === 'berat') {
    res.redirect('./apply-for-a-nino-2-phase-2-gnc/info-berat')
  } else if (contacted === 'home-office') {
    res.redirect('./apply-for-a-nino-2-phase-2-gnc/info-home-office')
  } else {
    res.redirect('./apply-for-a-nino-2-phase-2-gnc/info-nifu')
  }
})


// information requested router
router.get('/info-applicant-gnc/', function (req, res) {
  var infoApplicant = req.session.data['info-applicant']
  console.log(`infoApplicant = ${infoApplicant}`);
  if (infoApplicant === 'rtw') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/info-berat-rtw')
  } else if (infoApplicant === 'rtr') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/info-berat-rtr')
  } else if (infoApplicant === 'trace-deets') {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/info-berat-trace-deets')
  } else {
    res.redirect('apply-for-a-nino-2-phase-2-gnc/info-berat-other')
  }
})


module.exports = router
