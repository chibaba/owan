import io from 'socket.io-client';

const socket = io('https://staging.messaging.humbergames.com');

socket.on('conncet', () => {
  console.log('connected');
});

socket.on('disconnect', function () {
  console.log('reconnecting');
});

export default socket;
