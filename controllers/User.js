'use strict';

const debug = require('debug'),
  db = require('../db'),
  log = debug('scrubs:controller:user');


// Add a new user
function create(req, res) {
  log('Creating a new User');

  db.query('INSERT INTO users SET ?', req.body, (error, result) => {
    if (error) throw error;

    res.status(201).send(`User added with ID: ${result.insertId}`);
  });
}

/**
 * List all users
 */
function list(req, res) {
  log('Listing all users');

  db.query('SELECT * FROM users', (error, result) => {
    if (error) throw error;

    res.send(result);
  });
}

// Delete a user
function remove(req, res) {
  log('Removing a User');
  const id = req.params.id;

  db.query('DELETE FROM users WHERE id = ?', id, (error) => {
    if (error) throw error;

    res.send('User deleted.');
  });
}

/**
 * Update an existing user
 */
function update(req, res) {
  log('Updating a user');

  const id = req.params.id;

  db.query('UPDATE users SET ? WHERE id = ?', [req.body, id], (error) => {
    if (error) throw error;

    res.send('User updated successfully.');
  });
}

/**
 * View indiv user by id
 */
function view(req, res) {
  log('Viewing indiv. user');

  const id = req.params.id;

  db.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
    if (error) throw error;

    res.send(result);
  });
}


module.exports = {
  create,
  list,
  remove,
  update,
  view
};
