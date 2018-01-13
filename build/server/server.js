'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('./webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var DEFAULT_PORT = 3000;
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpack4.default);
app.set("port", process.env.PORT || DEFAULT_PORT);

//mongoose config

_mongoose2.default.Promise = global.Promise;

if (MONGODB_URI) {
  _mongoose2.default.connect('mongodb://heroku_5cq9xdl6:ni4ii1548pq8k463isc4lg6ll7@ds255347.mlab.com:55347/heroku_5cq9xdl6');
} else {
  _mongoose2.default.connect('mongodb://localhost/lunchy');
}

//passport config
var passport = require('passport');
var session = require('express-session');

require('../config/passport.js')(passport);
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser()); // read cookies (needed for auth)
// required for passport
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route
var routes = require('../routes/routes.js');
app.use('/', routes);

if (process.env.NODE_ENV === 'development') {
  console.log('Running in DEVELOPMENT mode...');

  var webpackMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var middleware = webpackMiddleware(compiler, {
    publicPath: _webpack4.default.output.publicPath,
    contentBase: 'public',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.use(_express2.default.static(_path2.default.join(__dirname, "../../client/public")));
app.get('*', function (request, response) {
  response.sendFile(_path2.default.join(__dirname + '../../../client/public', 'index.html'));
});

app.listen(app.get("port"), function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Listening on port 3000');
  }
});
//# sourceMappingURL=server.js.map