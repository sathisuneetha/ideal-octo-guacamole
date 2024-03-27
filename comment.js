// Create web server
// Create a web server that listens on port 3000 and serves the following responses:
// 1. For the route /, the server should respond with "Hello, World!".
// 2. For the route /name, the server should respond with "Hello, name!", where name is any string.
// 3. For any other route, the server should respond with a 404 error.
// Use the express module to create the server.

// Import module
const express = require('express');


// Handle request
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/name', (req, res) => {
    res.send('Hello, name!');
});
app.get('*', (req, res) => {
    res.status(404).send('404 Error');
});












