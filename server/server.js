const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
console.log("added shit");

io.on('connection', (socket) => {
  console.log('New user connected');




  socket.on('disconnect', () => {
    console.log('User was disconnected');

console.log("added shit");



  });
});


console.log("intentionally making changes to fuck up history")

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
