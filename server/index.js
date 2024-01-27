const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(8000, () => console.log('Server is running on port 8000'));