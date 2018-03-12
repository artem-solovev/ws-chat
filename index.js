const http = require( 'http' );
const readFile = require( './readFile' );
const extract = require( './extract' );
const wss = require( './websockets-server' );

const server = http.createServer( ( req, res ) => {
    console.log( 'Responding to a request.' );

    let filePath = extract( req.url );

    readFile( filePath, res );
} );

server.listen( 3000 );