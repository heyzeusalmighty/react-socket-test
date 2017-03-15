const express = require('express');
// const io = require('socket.io');
let app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));


let server = app.listen(3000);
let io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
    console.log('connected: %s ', socket.id);
})

console.log('server is running on port 3000');
