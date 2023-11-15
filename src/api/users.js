const express = require('express');
const db = require('../database');
const router = express.Router();

// Mock users
const users = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Doe', age: 25 },
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Get a user by id
router.get('/:id', (req, res) => {
  const id = req.params.id;

  const sqlQuery = "select * from users where id = " + id;
    console.warn(sqlQuery);

  db.all(sqlQuery, [], (err, rows) => {
    if (err) {
      throw err;
    }
    console.warn(rows);
    //res.json(rows);
  },
  );

  const user = users.find(user => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create a new user
router.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    const updatedUser = { ...users[index], ...req.body };
    users[index] = updatedUser;
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;