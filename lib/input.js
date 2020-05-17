'use strict';
//Requires
const minimist = require('minimist');

/* 
    - Exports a constructor function
    - Uses minimist (or any other CLI library) to read command line arguments
    - Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
    - Returns an [instance] = [complex object] containing the action to perform and the payload for the action
*/

//  a -> does something

// what if we had a.valid() that told us if this was valid

// export a's constructor (which GIVES us a)
// we should have access to:

// a.validCommand = { action: 'add', payload: 'string'}
// a.validInp() => a function that tells us if a.command makes sense

// args is something like ['-a', 'my note']
function Input(args) {
    const argMini = minimist(process.argv.slice(2));
    // argMini is something like { _: [], a: 'my note' }
    this.validCommand = {};
    let objectArray = Object.keys(argMini);

    for (let i = 0; i < objectArray.length; i++) {
        // i = 0 >>> key = _ >>> val = []
        // i = 1 >>> key = a >>> val = 'my note'
        let key = objectArray[i];
        let val = argMini[key];
        // if (key === 'a' || 'add') {
        //     return this.validCommand = { action: 'add', payload: val };

        // }
            switch (key) {
                case 'a':
                case 'add':
                    // set this.validCommand to something like {action: 'add', payload: 'my note'}
                    this.validCommand = { action: 'add', payload: val };
                    return;
                default:
                    break;
            }
    }
}

Input.prototype.validInp = function () {
    if (!this.validCommand) return false;

    if (!this.validCommand.action) return false;
    // if (this.validCommand.action === 'add') {
    //     return typeof this.validCommand.payload === 'string';

    // }
    switch (this.validCommand.action) {
        case 'add':
            return typeof this.validCommand.payload === 'string';
        default:
            break;
    }
};

module.exports = Input;
