const express = require('express');
const cors = require('cors');
const path = require('path');
const lebronFact = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/fact', (req, res) => {
    const randomIndex = Math.floor(Math.random() * lebronFact.length);
    const fact = lebronFact[randomIndex];
    res.json(fact);
});

app.listen(PORT, () => {
    console.log(`✅ Lebron James Facts API running on port: ${PORT}`);
    console.log(`🎲 Random fact: http://localhost:${PORT}/api/fact`);
});
