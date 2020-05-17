'use strict';

/* 
 - Exports a constructor function 
 - Compose a prototype method that can execute the correct (any) operation, given the above object DONEISH
 - How will you use that object to run the correct method?
 - You can predict that add won’t be the only action we’re going to have to handle…
 - Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console log the text of the note to be added when the add command is executed (console.log)
*/

function Notes(args) {
    // what should args be?
    // an instance of input (which has .validCommand and .validInp)

    if (args.validInp()) this.execute(args.validCommand);
    else console.error('error occurs');
}

Notes.prototype.execute = function (validCommand) {
    // if (validCommand.action === 'add') {
    //     return this.add(validCommand.payload);

    // }
    switch (validCommand.action) {
        case 'add':
            this.add(validCommand.payload);
            break;
        default:
            break;
    }
};
Notes.prototype.add = function (payload) {
    let id = Math.floor(Math.random() * 10);
    console.log('Add');
    console.log(id + ':', payload);
};

module.exports = Notes;