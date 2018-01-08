const express = require('express');
const router = express.Router();
const passport = require('passport');
const apiRoutes = require("./api");
const group = require("../config/groups")
import path from 'path';


//homepage
router.get('/', function(req, res) {
  // Display flash message, if any
  console.log('home: ', req.body, ', user: ', req.user);
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});


//API routes

router.use("/api", apiRoutes);

//Login
router.post('/login', passport.authenticate('login', {
  failureRedirect: '/login'
}), function(req, res) {
      console.log('login: ', req.body);
      res.redirect('/');
    }
);

//Signup
router.post('/signup', passport.authenticate('signup', {
    failureRedirect: '/signup'
}), function(req, res) {
      let { admin, name } = req.user.group;
      console.log('signup: ', req.body);

      if (admin) {
        group.newGroup(req.user, name);
      }

      res.redirect('/');
    }
);


module.exports = router;
