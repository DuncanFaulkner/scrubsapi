const app = require('./app'),
  config = require('./config'),
  debug = require('debug'),
  http = require('http'),
  log = debug('scrubs:start');

// Routing
require('./routes')(app);

http.createServer(app).listen({ host: config.get('ip'), port: config.get('port') }, (error) => {
  if (error) return log(`Error: ${error}`);

  log(`Server listening on port ${config.get('port')}`);
});

module.exports = app;
