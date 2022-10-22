const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '/html/index.html'));
 });

 app.get('/about', function(req,res) {
    res.sendFile(path.join(__dirname, '/html/about.html'));
 });

 app.get('/projects', function(req,res) {
    res.sendFile(path.join(__dirname, '/html/projects.html'));
 });

 app.use(express.static(__dirname + '/'));

app.listen(port);

console.log(`He do the weewoo weewoo. I am a webserver. I am running. Please stop me if you want to use terminal`);