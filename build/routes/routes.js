'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();
var passport = require('passport');
var apiRoutes = require("./api");
var group = require("../config/groups");


//homepage
router.get('/', function (req, res) {
  // Display flash message, if any

  var body = req.body,
      user = req.user;

  console.log('home: ', body, ', user: ', user);

  res.sendFile(_path2.default.join(__dirname, '../../client/public/index.html'));
});

//API routes
router.use("/api", apiRoutes);

//Login
router.post('/login', passport.authenticate('login', {
  failureRedirect: '/login'
}), function (req, res) {
  console.log('login: ', req.body);
  res.send(req.user);
});

//Signup
router.post('/signup', passport.authenticate('signup', {
  failureRedirect: '/signup'
}), function (req, res) {

  console.log('---------------------------');
  console.log('signup: ', req.body);
  console.log('---------------------------');
  res.send(req.user);
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
//# sourceMappingURL=routes.js.map