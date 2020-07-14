const app = require('express')();
const socket = require('socket.io');

const http = require('http').createServer(app);

const io = socket(http);

app.get('/', (req, res) => {
  res.send('Hello b4tut4');
});

io.on('connection', (socket) => {
  console.log('hello strange');
  socket.on('chat.message', (data) => {
    console.log(data);
    io.emit('chat.message', data);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
