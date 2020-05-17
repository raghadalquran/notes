#!/usr/bin/env node
'use strict';

//Requires
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let userInput = new Input();
// userInput = {
//   validCommand: {}
//   validInp: [function]
//}
let userNotes = new Notes(userInput);