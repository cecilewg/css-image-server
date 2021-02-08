const express = require('express');
const app = express();

// servir des fichiers statiques
app.use(express.static(__dirname + '/public'));

// App startup
app.listen(6789, function(){
    console.log('App started at http://localhost:6789');
})
