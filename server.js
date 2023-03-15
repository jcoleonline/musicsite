const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

const db = require('./db');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const htmlData = `<div>
                        <h1>J.Cole Music</h1>
                        <h2>Welcome true fans of J.cole</h2>
                        <img src="/images/warmup.jpg" style="display: block; margin-bottom: 10px">
                        <a href="/albums">Checkout His Albums</a>
                    </div>`;
    res.send(htmlData);
});

app.get('/albums', (req, res) => {

    const list = db.map((albums, index) => {
        return `<li><a href="/albums/${index}">${albums.title}</a></li>`;
    }).join('');

    const htmlData = `<div>
                        <h1>Choose An Album</h1>
                        <ul>
                        ${list}
                        </ul>
                        </div>`;
    res.send(htmlData);
});

app.get('/albums/:id', (req, res) => {
    const { id } = req.params;
    const title = db[id].title;
    const img = db[id].img


    const songs = db[id].songs.map((song) => {
        return `<li>${song}</li>`;
    }).join('');


    const htmlData = `<div>
                        <h1>Album ${title}</h1>
                        <ul>
                       ${songs}
                        </ul>
                        <img src="/images/${img}" 
                        </div>`;
    res.send(htmlData);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});