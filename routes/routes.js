const express = require('express');
const router = express.Router();
const passport = require('passport');
// const apiRoutes = require("./api");
import path from 'path';


//homepage
router.get('/', function(req, res) {
  // Display flash message, if any
  console.log('home: ', req.body, ', user: ', req.user);
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});


//API routes
// router.use("/api", apiRoutes);
// router.post('/api', function(req, res) {
//       console.log('da log ');
//       res.redirect('/');
//     }
// );


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
      console.log('signup: ', req.body);
      res.redirect('/');
    }
);


module.exports = router;
