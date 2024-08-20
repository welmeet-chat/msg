import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // replace with your server URL

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('message', (message) => {
  console.log('Received message:', message);
});

socket.on('chat-history', (chatHistory) => {
  console.log('Received chat history:', chatHistory);
});

// Send a message to the server
socket.emit('message', 'Hello from client!');

