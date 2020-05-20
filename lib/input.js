'use strict';
const minimist = require('minimist');

class Input {
  constructor() {
    this.obj;
    let argMini = minimist(process.argv.slice(2));
    if (Object.keys(argMini)[1] === 'add' || Object.keys(argMini)[1] === 'a') {
      if (Object.keys(argMini)[2] === 'category') {
        this.getNote(argMini.add || argMini.a, argMini.category);
      }
      else {
        this.getNote('ERROR');
      }
    }
    else if (Object.keys(argMini)[1] === 'list') {
      this.listFunc(argMini.list);
    }
    else if (Object.keys(argMini)[1] === 'delete') {
      this.deleteFunc(argMini.delete);
    }
    else {
      this.getNote('ERROR');
    }
  }
  getNote(myNote, categ) {
    if (myNote === 'ERROR') {
      let strErr = `* you should use (--add with a note and --category for the category) or (--a/-a)
      * you should use --list to show all the notes or you can do -- list with a category 
      * you should use --delete with an id to delete a note `;
      return strErr;
    }
    else if (myNote !== true && categ !== true) {
      this.obj = { action: 'add', payload: myNote, category: categ };
      return this.obj;
    }
    else {
      return 'ENTER a correct message';
    }
  }
  listFunc(list){
    if(list === true){
      this.obj = {action: 'list' , categ: 'all'};
      return this.obj;
    }
    else{
      this.obj = {action: 'list' , categ: list};
      return this.obj;
    }
  }
  deleteFunc(del_Id){
    if(del_Id === true){
      return 'PLZ ENTER THE ID';
    }
    else{
      this.obj = {action: 'delete' , id: del_Id};
      return this.obj;
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
  isValid(){
    return this.obj; 
  }
}


module.exports = Input;
