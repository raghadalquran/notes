'use strict';
//requires
const minimist = require('minimist');
//Exports a constructor function
function Input(){
    //Uses minimist (or any other node/npm library of your choosing) to read command line arguments
    const args = minimist(process.argv.slice(2));
    this.notes = this.getNotes(args.m);
}
//On instantiation, evaluates and validates the input
//Is the command (i.e. ‘–add’) a valid command
//Is there data associated with the command

Input.prototype.getNotes = function(add = ''){
    let validCommand = /--add|-a/g;

    //Returns an instance containing the action to perform and the payload for the action
    return validCommand.test(add) ? add : 'Error Occurs';
}




module.exports = Input;