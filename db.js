const config = require('./config'),
  mysql = require('mysql');

// Create a MySQL pool
const db = mysql.createPool({
  host: config.get('database.mysql.host'),
  user: config.get('database.mysql.username'),
  password: config.get('database.mysql.password'),
  database: config.get('database.mysql.table')
});

// Export the db pool
module.exports = db;