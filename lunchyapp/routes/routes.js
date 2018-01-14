const express = require('express');
const router = express.Router();
const passport = require('passport');
const apiRoutes = require("./api");
const group = require("../config/groups")
import path from 'path';


//homepage
router.get('/', function(req, res) {
  let { body, user } = req;
  console.log('home: ', body, ', user: ', user);

  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});


//API routes
router.use("/api", apiRoutes);

//Login
router.post('/login', passport.authenticate('login', {
  failureRedirect: '/login'
}), function(req, res) {
      console.log('login: ', req.body);
      res.send(req.user);
    }
);

//Signup
router.post('/signup', passport.authenticate('signup', {
    failureRedirect: '/signup'
}), function(req, res) {

      console.log('---------------------------');
      console.log('signup: ', req.body);
      console.log('---------------------------');
      res.send(req.user)
    }
);

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
