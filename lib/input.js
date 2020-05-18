'use strict';
//Requires
const minimist = require('minimist');

function Input() {
  const checkMethod = process.argv[2];
  const argMini = minimist(process.argv.slice(2));
  let objectArray = Object.keys(argMini)[1];

  let val = argMini[objectArray];
   
  let regEx = /^-{2}add$|^-{2}a$|^-a$/ig;
  if (regEx.test(checkMethod)) {
    if (typeof (val) === 'string') {
      this.action = objectArray;
      this.payload = val;
    }
    else{
      console.log('PLZ type a NOTE');
    }
        
  }
  else {
    console.log('You should type a correct COMMAND!');
  }

}

module.exports = Input;
