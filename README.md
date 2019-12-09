# js-http-build-query
A simple JavaScript package to generate HTTP Query String

## Installation:

```sh
$ npm install js-http-build-query
```

## Usage:

```javascript
import http_build_query from 'js-http-build-query'

// Simple object
let data = {
  roll: 143,
  message: 'hello world',
  url: 'https://example.com'
};

http_build_query(data); // roll=143&message=world&url=https://example.com
```