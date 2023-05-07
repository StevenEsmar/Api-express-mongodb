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
app.use(cors());

app.use('/',mutantRoute);
app.use('/',statsRoute);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("Connected to MongoDB"))
    .catch((error)=> console.error(error));

const port = process.env.PORT || 4001;

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});