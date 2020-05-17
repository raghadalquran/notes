#!/usr/bin/env node
'use strict';
//Requires the library files you will be writing (input, notes)
const Input = require ('./lib/input');
const Notes = require('./lib/notes');

//Instantiates an instance of an “Input” parser module
const addedInput = new Input();
//Passes the command to the Notes library, which executes the command
Notes.fetch(addedInput);