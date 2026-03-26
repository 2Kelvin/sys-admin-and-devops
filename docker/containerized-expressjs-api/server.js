const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET: Basic welcome route
app.get('/', (req, res) => {
    res.send('Welcome to a simple Express API!');
});

// GET: Fetch some sample data
app.get('/api/data', (req, res) => {
    res.json({
        message: "Success!",
        items: [1, 2, 3],
        timestamp: new Date()
    });
});

// POST: Echo back data sent by the user
app.post('/api/echo', (req, res) => {
    const data = req.body;
    res.status(201).json({
        received: data,
        status: "Data received successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});