import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const DEFAULT_PORT = 3000;
const app = express();
const compiler = webpack(config);
app.set("port", process.env.PORT || DEFAULT_PORT);


//mongoose config
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;


// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lunchy', {
//   useMongoClient: true
// });

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true
  })
} else {
  mongoose.connect('mongodb://localhost/lunchy', {
    useMongoClient: true
  });
}



//passport config
var passport = require('passport');
var session = require('express-session');

require('../config/passport.js')(passport);
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
const routes = require('../routes/routes.js');
app.use('/', routes);


if(process.env.NODE_ENV === 'development') {
  console.log('Running in DEVELOPMENT mode...');

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


app.use(express.static(path.join(__dirname, "../../client/public")))
app.get('*', function(request, response){
  response.sendFile(path.join(__dirname + '../../../client/public', 'index.html'))
})



app.listen(app.get("port"), function (error) {
    if(error) {
        console.log(error);
    } else {
        console.log('Listening on port 3000');
    }
})
