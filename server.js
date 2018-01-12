import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './webpack.config';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const compiler = webpack(config);
let port;

//mongoose config
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
if (MONGODB_URI) {
  port = process.env.PORT || 3000
  mongoose.connect("mongodb://heroku_92bdwqcz:c0s9guctbb50f899t3c0dqjtru@ds255347.mlab.com:55347/heroku_92bdwqcz")
} else {
  port = 3000;
  mongoose.connect('mongodb://localhost/lunchy');
}



//passport config
var passport = require('passport');
var session = require('express-session');

require('./config/passport.js')(passport);
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false
} ));
app.use(passport.initialize());
app.use(passport.session());


app.use(cookieParser()); // read cookies (needed for auth)
// required for passport
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//route
const routes = require('./routes/routes.js');
app.use('/', routes);




if(process.env.NODE_ENV === 'development') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'public',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    }
  })
  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static(path.join(__dirname, "/public")))
// app.use(express.static(path.join(__dirname + "src"))
app.get('*', function(request, response){
  response.sendFile(path.resolve(__dirname + '/client/public', 'index.html'))
})


app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`);
        console.log('Listening on port 3000');
    }
})
