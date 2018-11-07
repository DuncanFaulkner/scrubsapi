'use strict';

const bodyParser = require('body-parser'),
  express = require('express'),
  helmet = require('helmet'),
  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express Security
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.hidePoweredBy({ setTo: 'DuncanScrubs' }));
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());

module.exports = app;
