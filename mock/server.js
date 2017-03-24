var jsonServer = require('json-server')
var mock = require('./db.js')
var server = jsonServer.create()
//var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
//server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})

server.use(jsonServer.bodyParser)
server.post('/test', function (req, res) {
  //  res.jsonp({"url":req.body})
  res.jsonp({"url":req.body})
})
