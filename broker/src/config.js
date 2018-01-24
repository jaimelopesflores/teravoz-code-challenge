const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
  },
  development: {
    rabbitmq: {
      uri: 'amqp://localhost:5672'
    },
    port: process.env.PORT || 9001,
  },
  production: {
    rabbitmq: {
      uri: process.env.RABBITMQ_URI || 'amqp://localhost:5672'
    },
    port: process.env.PORT || 8081,
  }
}

module.exports = Object.assign(config.all, config[config.all.env])
export default module.exports
