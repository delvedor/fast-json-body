'use strict'

const t = require('tap')
const test = t.test
const request = require('request')
const http = require('http')
const jsonBody = require('./json-body')

const server = http.createServer((req, res) => {
  jsonBody(req, (err, body) => {
    t.error(err)
    res.end(JSON.stringify(body))
  })
})

server.listen(0, err => {
  t.error(err)
  server.unref()

  run({ hello: 'world' })
  run({ num: 1, str: 'string', bool: true, obj: { hello: 'world' }, nil: null })
  run({ obj: { nested: { a: true, b: false } }, str: 'King of the north!' })
})

function run (json) {
  test('should return the same json', t => {
    t.plan(2)
    request({
      method: 'POST',
      uri: 'http://localhost:' + server.address().port,
      body: json,
      json: true
    }, (error, response, body) => {
      t.error(error)
      t.deepEqual(body, json)
    })
  })
}
