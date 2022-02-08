$(document).ready(function () {
  /* Global io */
  let socket = io();
  socket.on('user', (data) => {
    $('#num-users').text(data.currentUsers + ' online');
    // let message = data.name + (data.connected ? ' has joined the chat.' : ' has left the chat.');
    // $('#messages').append($('<li>').html('<b>' + message + '</b>'));
  });
  
  socket.on('chat message', (data) => {
    $('#messages').append($('<li>').html(`<fieldset><legend>${data.name}</legend><p>${data.message}</p></fieldset>`));
  });

  // Form submittion with new message in field with id 'm'
  $('form').submit(function () {
    let messageToSend = $('#m').val();
    if(messageToSend.trim() == "") return;
    // Send message to server here?
    socket.emit('chat message', messageToSend);
    $('#m').val('');
    return false; // Prevent form submit from refreshing page
  });
});