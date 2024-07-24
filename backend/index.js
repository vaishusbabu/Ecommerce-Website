const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());


const mongoURI = 'mongodb+srv://vaishusbabu:Qwerty%40123@cluster0.0jyfdki.mongodb.net/mydatabase?retryWrites=true&w=majority';
// const mongoURI='mongodb://localhost:27017'

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});


app.listen(4002, () => {
  console.log('Server started on port 4002');
});
