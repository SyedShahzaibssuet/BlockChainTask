const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

var mongoDB = 'mongodb://localhost/pos';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error' , console.error.bind(console, 'Connection Error MongoDB:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const Home = require('./home');
app.use('/home',Home);

app.listen(port,(req,res) => {
    console.log(`listening on Port No ${port}!`);
})