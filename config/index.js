const path = require('path');
const convict = require('convict');

// Define a schema
var conf = (module.exports = convict({
  env: {
    doc: 'The app environment.',
    format: ['production', 'development'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'HOST_IP'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3001,
    env: 'HOST_PORT'
  },
  database: {
    mysql: {
      host: {
        doc: 'The mysql database host',
        format: String,
        default: '172.17.0.2',
        env: 'MYSQL_HOST'
      },
      port: {
        doc: 'The mysql database port',
        format: 'port',
        default: 3306,
        env: 'MYSQL_PORT'
      },
      username: {
        doc: 'The mysql database username',
        format: String,
        default: 'root',
        env: 'MYSQL_USERNAME'
      },
      password: {
        doc: 'The mysql database password',
        format: String,
        default: 'integra',
        env: 'MYSQL_PASSWORD'
      },
      table: {
        doc: 'The mysql database table',
        format: String,
        default: 'integra',
        env: 'MYSQL_TABLE',
        arg: 'mysql-table'
      }
    }
  }
}));

// Load environment dependent configuration
conf.loadFile(path.join(__dirname, conf.get('env') + '.json'));

// Perform validation
conf.validate({ allowed: 'strict' });
