
var http = require('http')

module.exports = function (options) {

  options = options || {}
  var statusCode = options.permament ? 301 : 302

  var server = http.createServer(function (req, res) {
 
    if (!req.headers.host) {
      res.statusCode = 400
      res.end()
      return
    }

    var location = 'https://' + req.headers.host.split(':')[0] + req.url

    res.statusCode = statusCode
    res.setHeader('Connection', 'close')
    res.setHeader('Content-Length', '0')
    res.setHeader('Location', location)
    res.end()
  })

  return server
}
