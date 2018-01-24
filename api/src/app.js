import http from 'http';
import { env, mongo, rabbitmq, port, ip, apiRoot } from './config';
import mongoose from './services/mongoose';
import rabbit from './services/rabbitmq';
import express from './services/express';
import api from './api';

const app = express(apiRoot, api);
const server = http.createServer(app);

mongoose.connect(mongo.uri, { useMongoClient: true });
mongoose.Promise = Promise;

rabbit.connect(rabbitmq.uri);

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log(`> Express server listening on http://${ip}:${port}, in ${env} mode`);
  });
});

export default app;
