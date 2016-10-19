'use strict'

const fastJson = require('fast-json-parse')

function jsonBody (request, callback) {
  var body = ''
  request
    .on('error', onError)
    .on('data', onData)
    .on('end', onEnd)

  function onError (err) {
    callback(err, null)
  }
  function onData (chunk) {
    body += chunk
  }
  function onEnd () {
    body = fastJson(body)
    callback(body.err, body.value)
  }
}

module.exports = jsonBody
