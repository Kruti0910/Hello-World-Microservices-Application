const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('hello');
    }
);

app.listen(8990, () => {
    console.log('Server is running on http://localhost:8990/hello');
});

