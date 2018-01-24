import { success, notFound } from '../response';
import { getOne, persist } from '../client/controller';
import rabbit from '../rabbitmq';

const sendToQueue = call => client => {

  let queue = rabbit.whichQueue(call.type, !!client);

  rabbit.send(queue, call);

  console.log(Object.assign(client || {}, { queue }))

  return Object.assign(client || {}, { queue });
}

export const handle = ({ body }, res, next) =>
  getOne(body.their_number)
    .then(sendToQueue(body))
    .then(persist(body))
    .then(success(res, 200))
    .catch(next);
