'use strict';
//Requires
const minimist = require('minimist');

function Input() {
    const checkMethod = process.argv[2];
    // console.log(checkMethod);
    const argMini = minimist(process.argv.slice(2));
    // console.log(argMini);
    // argMini it's like { _: [], a: 'my note' }
    let objectArray = Object.keys(argMini)[1];
    // console.log(objectArray);

    let val = argMini[objectArray];
    //add[a] --> 'my note'
    //validation
    let regEx = /^\-{2}add$|^\-{2}a$|^\-a$/ig;
    if (regEx.test(checkMethod)) {
        if (typeof (val) === 'string') {
            this.action = objectArray;
            this.payload = val;
        }
        else{
            console.log('PLZ type a NOTE')
        }
        
    }
    else {
        console.log('You should type a correct COMMAND!')
    }

}

module.exports = Input;
