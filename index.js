#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/notes';
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let userInput = new Input();
let newNotes = new Notes(userInput);

if (userInput.valid()) {
  newNotes.add(userInput)
    .then(mongoose.disconnect);
} else {
  help();
}
newNotes.execute(userInput);

function help() {
  console.log('You should type a correct COMMAND!');
  process.exit();
}
