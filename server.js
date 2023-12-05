// app.js
const express = require('express');
const app = express();
const port = 3000;

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Welcome to aushwitz!');
});s

// Route for user profiles
app.get('/profile/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Viewing profile of ${username}`);
});

// Route for connections
app.get('/connections', (req, res) => {
  res.send('Viewing connections');
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
