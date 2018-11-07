'use strict';

const app = require('./app'),
  User = require('./controllers/User');

module.exports = function() {
  // Root
  app.get('/', function(req, res) {
    res.send({ message: 'Scrubs API biatch!' });
  });

  // User endpoints
  app.get('/user', User.list);
  app.get('/user/:id', User.view);
  app.post('/user', User.create); // Best to add auth to endpoint here!
  app.patch('/user/:id', User.update); // Best to add auth to endpoint here!
  app.delete('/user/:id', User.remove); // Best to add auth to endpoint here!

  // Others here ...
};
