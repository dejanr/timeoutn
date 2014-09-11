module.exports = function(ms, cb, msg) {
  var timedout = false

  setTimeout(function() {
    timedout = true
    cb(msg)
  }, ms)

  return function hasTimedOut() {
    return timedout
  }
}
