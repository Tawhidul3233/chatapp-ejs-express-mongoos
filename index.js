// Import the required dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

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
app.set("view enjine", "ejs")

// set static folder
app.use(express.static(path.join(__dirname, "public")))

// cookie parser
app.use(cookieParser(process.env.COOKIE_PARSER))




// default route hit
app.get('/', (req, res) => {
  res.send('Server runing')
})

// Start the Express application
app.listen(port, () => {
  console.log(`server runing port ${port}`)
})
