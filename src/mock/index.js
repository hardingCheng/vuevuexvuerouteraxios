const express = require('express');

const app = express();
var bodyParser = require('body-parser');
var router = require('../mock/router')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api',router);

app.listen(3000,function(){
    console.log(3000);
})