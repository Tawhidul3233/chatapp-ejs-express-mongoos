// External Import the required dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// internal exports
const { notFoundHandler, errorHandler } = require('./middleware/common/ErrorHandler');
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');


// listen port
const port = process.env.PORT || 5000;

// Create an instance of the Express application
const app = express();

// dotenv config
dotenv.config();

// Set up the MongoDB Cloud connection URI
const mongoURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.kbyx5ha.mongodb.net/?retryWrites=true&w=majority`;

// Connect to the MongoDB Cloud database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('connected mongodb'))
  .catch((err) => console.log(err))

// request parses
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// set view enjine
app.set("view engine", "ejs")

// set static folder
app.use(express.static(path.join(__dirname, "public")))

// cookie parser
app.use(cookieParser(process.env.COOKIE_PARSER))


// app routing 

app.use('/',  loginRouter)
app.use('/users',  usersRouter)
app.use('/inbox',  inboxRouter)


// 404 error handling
app.use(notFoundHandler)

//  common error handler
app.use(errorHandler)



// default route hit
// app.get('/', (req, res) => {
//   res.send('Server runing')
// })


// default route hit 
// app.get('/', (req,res)=>{
//   res.send('Server runing')
// })



// Start the Express application
app.listen(port, () => {
  console.log(`server runing port ${port}`)
})
