const express = require('express');
const app = express();

const fs = require('fs');
const {marked} = require('marked');

const Gamedig = require('gamedig');
const gamedig = new Gamedig({
    listenUdpPort: 13337
});
var favicon = require("serve-favicon");

app.use(favicon("public/favicon.ico"));

app.get('/', function (req, res) {
    var readme = './README.md';
    var output = fs.readFileSync(readme, 'utf8');
    res.send(marked(output.toString()));
});

app.get('/games', function (req, res) {
    var games = './node_modules/gamedig/GAMES_LIST.md';
    var output = fs.readFileSync(games, 'utf8');
    res.send(marked(output.toString()));
});

app.get('/info/:game/:ip', async (req, res) => {

    const {game, ip} = req.params;
    const [host, port] = ip.split(':')
    var response;

    await gamedig.query({
        type: game,
        host,
        port
    }).then((state) => {
        response = state;
        //console.log(state);
    })
        .catch((error) => {
            response = 'Server is offline';
            //console.log("Server is offline");
        });

    res.send({
        info: response,
    });

});

// Handling non matching request from the client 
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
});

app.use((error, res) => {
    res.status(error.status || 500);

    return res.send({
        error: {
            message: error.message,
        },
    });
});


module.exports = app;