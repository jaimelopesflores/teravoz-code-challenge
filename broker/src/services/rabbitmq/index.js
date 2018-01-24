import amqp from 'amqplib';

function Rabbit() {
  this.channel = null;
}

Rabbit.prototype.connect = function connect(uri) {
  return amqp.connect(uri)
    .then(conn => conn.createChannel())
    .then(ch => this.channel = ch);
}

Rabbit.prototype.consume = function subscribe(queueId, cb) {
  return this.channel.assertQueue(queueId, { durable: true })
    .then(ok => this.channel.consume(queueId, cb, { noAck: true }));
}

export default new Rabbit;
