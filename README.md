# js-http-build-query
A simple JavaScript package to generate HTTP Query String. Just create a object using query parameters and their values, and pass the object through this module to build query string.

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
};

http_build_query(data); // roll=143&message=world&url=https://example.com
```

## Contributing

[Muhaimenul Islam](https://github.com/muhaimenul)

## Security Vulnerabilities

If you discover a security vulnerability or bugs within LaraSearch, please send an e-mail to Muhaimenul Islam via [i.muhaimen@gmail.com](mailto:i.muhaimen@gmail.com).

## License

The LaraSearch package is open-sourced project licensed under the [MIT license](https://opensource.org/licenses/MIT).