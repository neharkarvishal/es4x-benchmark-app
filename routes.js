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

function json(ctx) {
  ctx
    .response()
    .putHeader('Server', SERVER)
    .putHeader('Date', date)
    .putHeader('Content-Type', 'application/json')
    .end(JSON.stringify({ message: 'Hello, World!' }));
}

function plaintext(ctx) {
  ctx
    .response()
    .putHeader('Server', SERVER)
    .putHeader('Date', date)
    .putHeader('Content-Type', 'text/plain')
    .end('Hello, World!');
}

module.exports = {
  home,
  json,
  plaintext,
};
