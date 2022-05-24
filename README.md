# js-http-build-query
[![Created Badge](https://badges.pufler.dev/created/muhaimenul/js-http-build-query)](https://npm.io/package/js-http-build-query)
[![Created Badge](https://img.shields.io/github/license/muhaimenul/js-http-build-query)](https://npm.io/package/js-http-build-query)
[![Created Badge](https://img.shields.io/github/issues/muhaimenul/js-http-build-query)](https://npm.io/package/js-http-build-query)


A simple JavaScript package to generate URL-encoded HTTP Query String. Just create a object using query parameters and their values, and pass the object through this module to build query string (like `http_build_query()` in php).

    ## Installation:

```bash
$ npm i js-http-build-query
```

## Usage:

```javascript
const http_build_query = require('js-http-build-query')

// Simple object
let data = {
  roll: 143,
  message: 'hello world',
  url: 'https://example.com'
}

http_build_query(data) // roll=143&message=world&url=https://example.com


let complexData = {
    foo: "bar",
    items: {
    	salt: "suger",
			quantity: [2, 3, 4]
    }
}

http_build_query(complexData) // foo=bar&items[salt]=suger&items[quantity][0]=2&items[quantity][1]=3&items[quantity][2]=4
```

## Contributing

    [Muhaimenul Islam](https://github.com/muhaimenul)

## Security Vulnerabilities

If you discover a security vulnerability or bugs, please send an e-mail to Muhaimenul Islam via [i.muhaimen@gmail.com](mailto:i.muhaimen@gmail.com).

## License

The js-http-build-query package is open-sourced project licensed under the [MIT license](https://opensource.org/licenses/MIT).