/// <reference types="@vertx/core/runtime" />
// @ts-check

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
