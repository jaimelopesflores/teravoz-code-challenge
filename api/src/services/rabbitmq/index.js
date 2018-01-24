import amqp from 'amqplib';
import Promise from 'bluebird';

function Rabbit() {
  this.channel = null;
}

Rabbit.prototype.connect = function connect(uri) {
  return amqp.connect(uri)
    .then(conn => conn.createChannel())
    .then(ch => this.channel = ch);
}

Rabbit.prototype.whichQueue = function whichQueue(type, isReturning) {
  switch(type) {
    case 'call.standby': return isReturning ? '910' : '900';
    default: return 'main';
  }
}

Rabbit.prototype.send = function send(queueId, obj) {
  return this.channel.assertQueue(queueId, { durable: true })
    .then(ok => this.channel.sendToQueue(queueId, new Buffer(JSON.stringify(obj))));
}

export default new Rabbit;
