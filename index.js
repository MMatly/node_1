const http = require('http')

var fs = require('fs')

var express = require('express')
var app = express()

app.set('views engine', 'ejs')

app.use((req, res, next) => {
  console.log('Time:', Date.now(), req.url);
    next();
})

app.use("/static", express.static(__dirname + '/static'))


app.get('/', (request, response) => {
    response.render("index.ejs");
})



app.get('/contact', (request, response) => {
    response.render("contact.ejs");
})

app.use((req, res, next) => {
  res.status(404).render("404.ejs");
})


app.listen(3000);
console.log("c'est parti")
