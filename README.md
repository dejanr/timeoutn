# timeoutn

timeoutn is a simple library for taming timed out async work

[![Build Status](https://semaphoreapp.com/api/v1/projects/76f73a00-8f7f-462a-8b6d-8d8cddc195e4/230234/shields_badge.png)](https://semaphoreapp.com/dejanr/timeoutn)

## Installation

    $ npm install timeoutn

## Basic Example

Here is a simple timed example. Where we call done callback before async work has finished.

```js
var timeoutn = require('timeoutn')
  , timedout

function done(err) {
  if (err) {
    console.log(err)
  }

  if (timedout()) {
    return console.log('Handle timed out scenario here')
  }

  ...
}

timedout = timeoutn(2000, done, 'Error processing after 2000 ms')
setTimeout(done, 3000)
```

Or you could just use err passed to handle, for timed out scenario

```js
var timeoutn = require('timeoutn')

function done(err) {
  if (err) {
    return console.log(err)
  }

  ...
}

timeoutn(2000, done, 'Error processing after 2000 ms')
setTimeout(done, 3000)
```

## What's it good for?

Whenever you need to be sure that something has finished, and is not staling forever.
You should setup timeout expectation and respond accordingly.

## Running tests

```
$ npm install
$ npm test
```

## Authors

  - [dejanr](http://github.com/dejanr)

## License

  BSD
