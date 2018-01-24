import Client from './model'

export const create = client =>
  Client.create(client)
    .then(client => client.view(true))

export const getOne = client_number =>
  Client.findOne({ client_number })
    .then(client => client ? client.view() : null)

export const persist = call => async client => {
  if (!client || !client.client_number) {
    let newClient = await create({ client_number: call.their_number });
    return Object.assign(newClient, client);
  }
  return client
}
