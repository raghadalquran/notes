'use strict';
const minimist = require('minimist');

class Input {
  constructor() {
    this.obj;
    let argMini = minimist(process.argv.slice(2));
    console.log(argMini);

    if (Object.keys(argMini)[1] === 'add' || Object.keys(argMini)[1] === 'a') {
      if (Object.keys(argMini)[2] === 'category') {
        this.note = this.getNote(argMini.add || argMini.a, argMini.category);
      }
    }
    else if (Object.keys(argMini)[1] === 'list') {
      this.showList(argMini.list);
    }
    else if (Object.keys(argMini)[1] === 'delete') {
      this.deleteNote(argMini.delete);
    }
    else {
      this.myNote = this.getNote('ERROR');
    }
  }
  getNote(myNote, categ) {
    if (myNote !== true && categ !== true) {
      this.obj = { action: 'add', payload: myNote, category: categ };
      return this.obj;
    }
    else if (myNote === 'ERROR') {
      return 'ENTER -a | --add to add NOTE and ENTER --category to add category';
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
