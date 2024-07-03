const express = require('express');
const app = express();
const port = 3000;

app.get('/courses', (req, res) => {
    console.log('done');
    res.send('done');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});