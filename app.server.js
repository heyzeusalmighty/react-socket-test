const express = require('express');
const path = require('path');
let app = express();

let connections = [];
let title = 'Untitled Presentation';

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

let server = app.listen(3000);
let io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {

    socket.once('disconnect', () => {
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log('disconnected: %s sockets remaining', connections.length);
    });

    socket.emit('welcome', {
        title: title
    });

    connections.push(socket);
    console.log('connected: %s sockets connected', connections.length);
})

console.log('server is running on port 3000');
