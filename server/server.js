require('dotenv').config();
const express = require("express");
const path = require("path");
const session = require('express-session');
const fs = require('fs');
const https = require('https');
const passport = require('passport');
const cors = require('cors');
const apiRoutes = require("./routes/api/apiRoutes");
const socketio = require('socket.io');
const authRouter = require('./routes/authRouter');
const passportInit = require('./controllers/passportInit');
const { SESSION_SECRET, CLIENT_ORIGIN } = require('./config');
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here

// Setup for passport and to accept JSON objects
app.use(express.json())
app.use(passport.initialize())
passportInit()

// Accept requests from the client
app.use(cors({
  origin: CLIENT_ORIGIN
})) 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const certOptions = {
  key: fs.readFileSync(path.resolve('certs/server.key')),
  cert: fs.readFileSync(path.resolve('certs/server.crt'))
}

const server = https.createServer(certOptions, app)

// Connecting sockets to the server and adding them to the request 
// so that we can access them later in the controller
const io = socketio(server)
app.set('io', io)

// saveUninitialized: true allows us to attach the socket id to the session
// before we have athenticated the user
app.use(session({ 
  secret: process.env.SESSION_SECRET, 
  resave: true, 
  saveUninitialized: true 
}))

// Connecting sockets to the server and adding them to the request 
// so that we can access them later in the controller
// const io = socketio(server)
app.set('io', io)

// Use apiRoutes
app.use("/api", apiRoutes);

// Direct all requests to the auth router
app.use('/', authRouter)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.send("Server Active");
});



app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// server.js
server.listen(process.env.PORT || 8080, () => {
  console.log('listening...')
});

// https://localhost:8080/__provider__/callback