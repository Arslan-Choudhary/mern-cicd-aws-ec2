// index.js

const express = require('express');
const app = express();
const PORT = 5000;

// Root route
app.get('/', (req, res) => {
  res.json('Hello from Node.js Backend!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});