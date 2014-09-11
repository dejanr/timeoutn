var test = require('tap').test
  , timeoutn = require('./index')
  , noop = function() {}

test('should return function', function(t) {
  t.type(timeoutn(1, noop), 'function', 'callback is function')
  t.end()
})

test('should call callback on time out', function(t) {
  t.plan(1)
  var done = function() {
    t.ok(true, 'cb was called')
    t.end()
  }
  timeoutn(200, done)
  setTimeout(function() {
    t.ok(false, 'cb was not called')
    t.end()
  }, 300)
})

test('should call cb with error message provided', function(t) {
  timeoutn(100, function(err) {
    t.equal(err, 'Error message', 'should return error message')
    t.end()
  }, 'Error message')
})

test('returned function should return timedout status', function(t) {
  var done, timedout

  t.plan(2)

  done = function() {
    t.ok(timedout(), 'it should time out')
    t.end()
  }
  timedout = timeoutn(300, done)
  setTimeout(function() {
    t.notOk(timedout(), 'it should not time out yet')
  }, 200)
})
