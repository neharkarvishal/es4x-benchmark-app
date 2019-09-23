// eslint-disable-next-line spaced-comment
/// <reference types="@vertx/core/runtime" />
// @ts-check

import { Router } from '@vertx/web';

const { host, port } = require('./config');
const routes = require('./routes');
let { date } = require('./config');

// eslint-disable-next-line no-undef
vertx.setPeriodic(1000, t => (date = new Date().toUTCString()));

// eslint-disable-next-line no-undef
const app = Router.router(vertx);

app.route('/').handler(routes.home);

/**
 * This test exercises the framework fundamentals including keep-alive support, request routing, request header
 * parsing, object instantiation, JSON serialization, response header generation, and request count throughput.
 */
app.get('/json').handler(routes.json);

/**
 * This test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of
 * high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is
 * still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test
 * environment.
 */
app.get('/plaintext').handler(routes.plaintext);

// eslint-disable-next-line no-undef
vertx
  .createHttpServer()
  .requestHandler(app)
  .listen(port, host, listen => {
    if (listen.failed()) {
      console.log('Failed to bind!');
      // FIXME: `process.exit(1)` will terminate process silently and there will be no chance to recover from this
      process.exit(1);
    } else {
      console.log(`🚀 Server listening at http://${host}:${port}`);
    }
  });
