#!/usr/bin/env node
'use strict';

//Requires
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let userInput = new Input();

let newNotes = new Notes(userInput);
newNotes.execute(userInput);
newNotes.add(userInput);