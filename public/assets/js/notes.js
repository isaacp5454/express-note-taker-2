const notes = require('express').Router();   //We are creating an API we can call from other parts of the code. This specific one is for accessing and editing our database. 
const { v4: uuidv4 } = require('uuid');
//const path = require('path');
const { readAndAppend, readFromFile } = require('../../../helpers/fsUtils.js');

notes.get('/', (req, res) =>
  readFromFile('./Develop/db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) => {
    const {title,text} = req.body;

    if (title && text) {
        // Variable for the object we will save
        const newNote = {
          "title":title,
          "text":text,
          "id": uuidv4(),
        };
    
        readAndAppend(newNote, './Develop/db/db.json');
    
        const response = {
          status: 'success',
          body: newNote,
        };
    
        res.json(response);
      } else {
        res.json('Error in posting note');
      }    
    
});

module.exports = notes