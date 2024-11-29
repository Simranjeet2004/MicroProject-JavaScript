const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Import JSON data
let items;
try {
  items = require('./data/items.json'); // Correct the file path
} catch (error) {
  console.error("Error loading items.json. Please check the file path or its contents.");
  items = []; // Fallback to an empty array if JSON fails to load
}

// Middleware to serve static files
app.use('/', express.static(path.join(__dirname, 'Public')));

// Route to send JSON data
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
