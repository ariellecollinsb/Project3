require('dotenv').config();
const express = require("express");
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const http = require("http");
const socketio = require('socket.io');
const authRouter = require('./routes/authRouter');
const passportInit = require('./controllers/passportInit');
const { SESSION_SECRET, CLIENT_ORIGIN } = require('./config');
const app = express();
const PORT = process.env.PORT || 3001;

// Setup for passport and to accept JSON objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passportInit()

// Accept requests from the client
app.use(cors({origin: '*'})) 
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});


// saveUninitialized: true allows us to attach the socket id to the session
// before we have athenticated the user
app.use(session({ 
  secret: process.env.SESSION_SECRET, 
  resave: true, 
  saveUninitialized: true 
}))





app.use("/api", require("./routes/api/apiRoutes"));
app.get('/wake-up', (req, res) => res.send('👍'))
app.use('/', authRouter)


var server = app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// Set up socket server
//var server = http.createServer(app);
var io = require('socket.io')(server);  //pass a http.Server instance
//server.listen(80);
app.set('io', io)
io.set('origins', '*:*');
io.on('connection', function(socket){
  console.log("Socket Connection");
})