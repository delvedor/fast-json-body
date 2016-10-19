'use strict'

const http = require('http')
const jsonBody = require('./json-body')

const server = http.createServer(handler)

function handler (req, res) {
  function cb (err, body) {
    if (err) console.log(err)
    res.end()
  }

  jsonBody(req, cb)
}

server.listen(3000)
