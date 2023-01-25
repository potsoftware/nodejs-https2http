const express = require('express')
const https = require("https")
const path = require("path")
const fs = require("fs")
const app = express()
const hostname = '127.0.0.1'
const request = require('request')
module.exports = app;

const options ={
  key:fs.readFileSync(path.join(__dirname,'key.pem')),
  cert:fs.readFileSync(path.join(__dirname,'cert.pem')) 
}

app.use(function(request, response, next) {
       return response.redirect("http://" + request.headers.host + request.url);
    next();
})

const sslserver = https.createServer(options,app)
sslserver.listen('443',()=>{console.log(`HttpS to HttP server is listening on port 443`)});
