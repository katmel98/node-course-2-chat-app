var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'danireth2006',
        text: 'Hey. This is Melvin'
    });

});

socket.on('disconnect', function() {
    console.log('Disconnected from server')
});

socket.on('newMessage', function (message) {
    console.log('New message', message)
});
