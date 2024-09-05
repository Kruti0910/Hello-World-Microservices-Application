const express =require('express');

const app=express();

app.get('/world', (req, res) => {
    res.send('world');
});

app.listen(8991, () => {
    console.log('Server is running on http://localhost:8991/world');
});