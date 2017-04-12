'use strict'

function jsonBody (request, callback) {
  var body = ''
  request.on('error', onError)
  request.on('data', onData)
  request.on('end', onEnd)
  function onError (err) {
    callback(err, null)
  }
  function onData (chunk) {
    body += chunk
  }
  function onEnd () {
    setImmediate(parse, body)
  }
  function parse (json) {
    try {
      callback(null, JSON.parse(body))
    } catch (err) {
      callback(err, null)
    }
  }
}

module.exports = jsonBody
