const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/homePage.html')));

app.listen(5000, () => console.log(`Frontend is listening on port 5000`));