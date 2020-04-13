const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/homePage.html')));

app.listen(5000, () => console.log(`Frontend is listening on port 5000`));


axios.get('/localhost:4000/restaurant')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
        (console.log("færdig :)"))
    });
