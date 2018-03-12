const path = require( 'path' );

const extractFilePath = ( url ) => {
    let fileName = 'index.html';

    
    if ( url.length > 1 ) {
        fileName = url.substring( 1 );
    }
    
    console.log( 'The fileName is: ' + fileName );

    let filePath = path.resolve( __dirname, 'app', fileName );

    return filePath;
};

module.exports = extractFilePath;