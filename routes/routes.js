const express = require('express');
const router = express.Router();
const passport = require('passport');
import path from 'path';


//homepage
router.get('/', function(req, res) {
  // Display flash message, if any
  console.log('home: ', req.body);
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

//Login Page
// router.get('/login', function(req, res) {
//     res.sendFile(path.join(__dirname, '../src/index.html'));
// });


//Login
router.post('/login', passport.authenticate('login', {
  failureRedirect: '/login'
}), function(req, res) {
        console.log('login: ', req.body);
        res.redirect('/');
    }
);

//TESTING FRONTEND
// router.post('/login', (req, res) => {
//   console.log('Login')
//   res.json({ user: 'Chris' })
// })

//Signup page
router.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

//Signup
router.post('/signup', passport.authenticate('signup', {
    failureRedirect: '/signup'
}), function(req, res) {
        console.log('signup: ', req.body);
        res.redirect('/');
    }
);


module.exports = router;
