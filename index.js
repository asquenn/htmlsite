const express = require('express');
const router = express.Router();
const app = express();
const path = require('path')

app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.use('/', router);
app.listen(3000);
console.log("Listening on port 3000. https://localhost:3000")

app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});