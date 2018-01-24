/* eslint-disable no-unused-vars */
import path from 'path'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || '/api',
    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    }
  },
  test: {
    mongo: {
      uri: 'mongodb://localhost/teravoz-code-challenge-backend-test',
      options: {
        debug: false
      }
    },
    rabbitmq: {
      uri: 'amqp://localhost'
    }
  },
  development: {
    mongo: {
      uri: 'mongodb://localhost/teravoz-code-challenge-backend-dev',
      options: {
        debug: true
      }
    },
    rabbitmq: {
      uri: 'amqp://localhost:5672'
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/teravoz-code-challenge-backend'
    },
    rabbitmq: {
      uri: process.env.RABBITMQ_URI || 'amqp://localhost'
    }
  }
}

module.exports = Object.assign(config.all, config[config.all.env])
export default module.exports
