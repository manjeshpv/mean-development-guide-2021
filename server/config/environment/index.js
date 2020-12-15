const path = require('path');
const dotenv = require('dotenv');

const root = path.normalize(`${__dirname}/../../..`);

const env = dotenv.config({ path: path.join(root, '.env') }).parsed;

const config = {
  all: {
    env: env.NODE_ENV,
    port: env.PORT || 2000,
    ip: env.IP || '0.0.0.0',
    root,
  },
  development: {

  },

  staging: {

  },
  
  ft: {

  },

  production: {

  },
};

const conf = Object.assign(env, config.all, config[process.env.NODE_ENV || 'development']);

module.exports = conf;
