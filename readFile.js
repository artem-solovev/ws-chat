const fs = require( 'fs' );
const mime = require( 'mime' );

const setContentType = ( filePath, res ) => {
    res.setHeader( 'Content-Type', mime.getType( filePath ) );
};

const handleError = ( err, res ) => {
    const filePath = 'app/404.html';
    setContentType( filePath, res );
    res.writeHead( 404 );

    fs.readFile( filePath, ( err, data ) => {
        res.end( data );
    } );
};

const readFile = ( filePath, res ) => {
    fs.readFile( filePath, ( err, data ) => {
        if ( err ) {
            handleError( err, res );
            return;
        } else {
            setContentType( filePath, res );
            res.end( data );
        }
    } );
};

module.exports = readFile;