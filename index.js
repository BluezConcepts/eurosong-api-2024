// importeren  van de express module is node_modules
const express = require('express');

//aanmaken van een express app
const app = express();

//endpoints
app.get('/', (req, res) =>{
    res.send("Hello World");
});

//starten van de erver en op welke port de server moet luisteren
app.listen(3000, () =>{
    console.log("server is running on port 3000");
});