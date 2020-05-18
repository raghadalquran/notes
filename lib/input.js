'use strict';
const minimist = require('minimist');

let regEx = /^add$|^a$/ig;

class Input {
  constructor() {
    let argMini = minimist(process.argv.slice(2));
    let objectArray;
    let val;
    if (Object.keys(argMini).length > 1) {
      objectArray = Object.keys(argMini)[1];
      val = argMini[objectArray];
    }
    else {
      objectArray = Object.keys(argMini)[0];
      val = argMini[objectArray];
    }
    if (regEx.test(objectArray) && argMini.a != true) {
      if (typeof (val) === 'string') {
        this.action = objectArray;
        this.payload = val;
      }
      else {
        console.log('PLZ type a NOTE');
      }

    }
    else {
      console.log('You should type a correct COMMAND!');
    }
  }
  valid() {
    let tst = /^add$|^a$/ig;
    if (tst.test(this.action) && typeof (this.payload) === 'string') {
      return true;
    }
    else {
      return false;
    }
  }
}


module.exports = Input;
