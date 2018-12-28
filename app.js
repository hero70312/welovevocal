'use strict';

const randomInt = require('random-int');
const bodyParser = require('body-parser');
const Config = require("./constants/constant");
const express = require('express');

const app = express();

// HTTP:413 Request Entity Too Large. => 要確認 express request 預設的最大上限 , 目前設定 100mb
app.use(bodyParser.json({limit: '100mb'}));

// allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,locale");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use('/upload', require('./router/upload'));

// set public folder as site root
app.use(express.static('public'));


const port = process.env.PORT || 3007;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
