import http from 'http';
import socketIo from 'socket.io';
import { rabbitmq, port, env } from './config';
import rabbit from './services/rabbitmq';

const io = socketIo();
const handle = queue => obj => io.sockets.emit(queue, obj.content.toString());

rabbit.connect(rabbitmq.uri).then(() => {
  rabbit.consume('main', handle('main'));
  rabbit.consume('900', handle('900'));
  rabbit.consume('910', handle('910'));
});

io.on('connection', client => console.log(`> Client ${client.id} connected.`))
io.listen(port);
console.log(`> Socket server listening on http://localhost:${port}, in ${env} mode`);

export default this;
