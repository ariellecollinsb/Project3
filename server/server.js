require('dotenv').config();
const express = require("express");


const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const passportInit = require('./controllers/passportInit');
const { SESSION_SECRET, CLIENT_ORIGIN } = require('./config');
const app = express();
const PORT = process.env.PORT || 3001;

// Setup for passport and to accept JSON objects
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));


// Accept requests from the client
app.use(cors({
  //origin: 'http://localhost:3000',
  origin: true,
  credentials: true
})) 




passportInit(app)



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