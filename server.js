const express = require('express');
const cors = require('cors');
const path = require('path');
const lebronFact = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static files like images and CSS/JS from current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Random Lebron fact API route
app.get('/api/fact', (req, res) => {
    const randomIndex = Math.floor(Math.random() * lebronFact.length);
    const fact = lebronFact[randomIndex];
    res.json(fact);
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Lebron James Facts API running on port: ${PORT}`);
    console.log(`🎲 Random fact: http://localhost:${PORT}/api/fact`);
});
