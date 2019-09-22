/// <reference types="@vertx/core/runtime" />
// @ts-check

import {Router} from '@vertx/web';
const {SERVER, host, port} = require('./config');
let {date} = require('./config');
const routes = require('./routes');

vertx.setPeriodic(1000, t => date = new Date().toUTCString());

const app = Router.router(vertx);

app.route('/').handler(routes.home);

/*
 * This test exercises the framework fundamentals including keep-alive support, request routing, request header
 * parsing, object instantiation, JSON serialization, response header generation, and request count throughput.
 */
app.get("/json").handler(ctx => {
  ctx.response()
  .putHeader("Server", SERVER)
  .putHeader("Date", date)
  .putHeader("Content-Type", "application/json")
  .end(JSON.stringify({message: 'Hello, World!'}));
});

/*
 * This test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of
 * high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is
 * still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test
 * environment.
 */
app.get("/plaintext").handler(ctx => {
  ctx.response()
  .putHeader("Server", SERVER)
  .putHeader("Date", date)
  .putHeader("Content-Type", "text/plain")
  .end('Hello, World!');
});

vertx
  .createHttpServer()
  .requestHandler(app)
  .listen(port, host, listen => {
    if (listen.failed()) {
      console.log('Failed to bind!');
      // FIXME: `process.exit(1)` will terminate process silently and there will be no chance to recover from this
      process.exit(1);
    }
    else {
      console.log(`🚀 Server listening at http://${host}:${port}`);
    }
  }
);
