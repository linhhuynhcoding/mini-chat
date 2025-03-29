const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to the server');
});

socket.on('error', (error) => {
  console.log('Error:', error.message);
});

socket.on('events', (data) => {
  console.log('Received data:', data);
});

socket.emit('events', 'Hello server!');
