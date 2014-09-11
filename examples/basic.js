var timeoutn = require('../')
  , timedout
  , notHandled = true

function done(err) {
  if (err) {
    console.log(err)
  }

  if (timedout() && notHandled) {
    notHandled = false
    return console.log('Handle timed out scenario here')
  }
}

timedout = timeoutn(2000, done, 'Error processing done after 2000 ms')
setTimeout(done, 3000)
