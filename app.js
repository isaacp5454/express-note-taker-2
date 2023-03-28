const express = require('express');
const path = require('path');
const api = require('./public/assets/js/notes.js');

const PORT = process.env.port || 3001;

const app = express();  //creating an object from express node.

app.use(express.json()); // this object can use json and can use url encoded.
app.use(express.urlencoded({ extended: true }));  

app.use(express.static(__dirname + '/public')); //setting default folder to our public folder. 
app.use('/api/notes/',api)

app.get('/', (req, res) =>           //sets the homepage to index.html
  res.sendFile(path.join(__dirname, '/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html')) //sets the notes to notes.html.
);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`) //listening to port.
);
