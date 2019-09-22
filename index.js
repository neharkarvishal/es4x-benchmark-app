/// <reference types="@vertx/core/runtime" />
// @ts-check

vertx
  .createHttpServer()
  .requestHandler(app)
  .listen(42069);

console.log('Server listening at: http://localhost:42069/');
