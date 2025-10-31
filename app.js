const express = require('express');
const app = express();
app.use(express.json());

// Function 1: Simple GET
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

// Function 2: A function to test (addition)
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error';
  }
  return a + b;
};

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  const result = add(a, b);
  
  if (result === 'Error') {
    res.status(400).json({ error: 'Invalid input. Please send two numbers.' });
  } else {
    res.status(200).json({ sum: result });
  }
});

// Export for testing
module.exports = { app, add }; 
