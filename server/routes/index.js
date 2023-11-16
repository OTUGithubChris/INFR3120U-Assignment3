var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
    title: 'Assignment Tracker Website'  
  });
});

router.get('/home', function(req, res, next) {
  res.render('home', { 
    title: 'Assignent Tracker Website'  
  });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About me'  
  });
});

module.exports = router;
