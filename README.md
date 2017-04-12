# fast-json-body
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![Build Status](https://travis-ci.org/delvedor/fast-json-body.svg?branch=master)](https://travis-ci.org/delvedor/fast-json-body)

`fast-json-body` is a crazy fast json body parser, its fully asynchronous and does not change the request object.  
At the time of writing is **~100% faster** than `body` and `body-parser`.

With the [testing server](https://github.com/delvedor/fast-json-body/blob/master/server.js) and the [benchmark script](https://github.com/delvedor/fast-json-body/blob/master/package.json#L8), `fast-json-body` can parse up to 40k request per second.

## Install
```
npm install fast-json-body --save
```

## Usage
`fast-json-body` exposes one function, that takes two parameters, the request object and a callback.  
The callback has two parameters, error and body.

## Example
```js
'use strict'

const http = require('http')
const jsonBody = require('fast-json-body')

const server = http.createServer((req, res) => {
  jsonBody(req, (err, body) => {
    if (err) {
      console.log(err)
      return res.end()
    }
    res.end(JSON.stringify(body))
  })
})

server.listen(3000)
```

## Benchmark
Run the following command in two different CLIs
```bash
$ npm run server
$ npm run bench
```

## Contributing
If you feel you can help in any way, be it with examples, extra testing, or new features please open a pull request or open an issue.

The code follows the Standard code style.  
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License
**[MIT](https://github.com/delvedor/fast-json-body/blob/master/LICENSE)**

*The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.*

Copyright © 2017 Tomas Della Vedova
