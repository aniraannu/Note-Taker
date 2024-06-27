// Import Express.js
const express = require('express');
// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');
// Specify on which port the Express.js server will run
const PORT = 3001;
// Initialize an instance of Express.js
const app = express();
// Static middleware pointing to the public folder
app.use(express.static('public'));
// listen() method is responsible for listening for incoming connections on the specified port 

//HTML Routes
// GET Route for homepage
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for feedback page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);