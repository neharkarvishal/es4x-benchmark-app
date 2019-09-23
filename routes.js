const { SERVER } = require('./config');
const { date } = require('./config');

function home(ctx) {
  ctx
    .response()
    .putHeader('Server', SERVER)
    .putHeader('Date', date)
    .putHeader('Content-Type', 'text/plain')
    .end('Hello from Vert.x Web!');
}

exports.home = home;
