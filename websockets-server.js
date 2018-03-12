const WebSocket = require( 'ws' );
const WebSocketServer = WebSocket.Server;
const port = 3001;

const ws = new WebSocketServer( {
    port: port
} );

let messages = [];

console.log( 'Websockets server started' );

ws.on( 'connection', ( socket ) => {
    console.log( '__client connection established' );

    socket.on( 'message', ( data ) => {
        console.log( 'messgae received: ' + data );


        messages.forEach( ( msg ) => {
            socket.send( msg );
        } );


        messages.push( data );
        
        ws.clients.forEach( ( clientSocket ) => {
            clientSocket.send( data );
        } );
    } );
} );