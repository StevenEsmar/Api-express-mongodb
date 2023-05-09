const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const mutantRoute = require("./routes/mutant");
const statsRoute = require('./routes/stats');

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/',mutantRoute);
app.use('/',statsRoute);


mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("Connected to MongoDB"))
    .catch((error)=> console.error(error));

const port = process.env.PORT || 8080;

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});