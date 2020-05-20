#!/usr/bin/env node
'use strict';
const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


const DB_URI = 'mongodb://localhost:27017/notes';
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



async function called(){
  let userInput = new Input();
  let newNotes = new Notes(userInput);
  await newNotes.execute(userInput);
  mongoose.disconnect();
}
called();

