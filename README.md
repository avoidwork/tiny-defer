# tiny-defer
Tiny Deferred for Client or Server

[![build status](https://secure.travis-ci.org/avoidwork/tiny-defer.svg)](http://travis-ci.org/avoidwork/tiny-defer)

## Example
```javascript
function something () {
  var defer = deferred();

  setTimeout(function () {
    defer.resolve(true);
  }, 1000);
  
  return defer.promise;
}

something().then(function (arg) {
  console.log(arg); // true;
});
```

## API
#### deferred()
Returns an unboxed `Promise`

## How to use tiny-defer
`tiny-defer` can be loaded as a CommonJS or AMD module, or with a script tag which would create `window.deferred`.

## License
Copyright (c) 2015 Jason Mulligan
Licensed under the BSD-3 license
