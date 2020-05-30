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
    }else if(Object.keys(argMini)[0] === 'add'){
      this.action = Object.keys(argMini)[0];
      this.payload = argMini.payload;
    }else if(Object.keys(argMini)[1] === 'update'){
      if(Object.keys(argMini)[2] === 'id'){
        this.updateFunc(argMini.update,argMini.id);        
      }
      else{
        this.updateFunc('ERROR');
      }
    }
    else {
      this.getNote('ERROR');
    }
  }
  getNote(myNote, categ) {
    if (myNote === 'ERROR') {
      return 'ENTER a NOTE';
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
      this.obj = {action: 'list' , category: 'all'};
      return this.obj;
    }
    else{
      this.obj = {action: 'list' , category: list};
      return this.obj;
    }
  }
  deleteFunc(del_Id){
    if(del_Id === true){
      return 'PLZ ENTER THE ID';
    }
    else{
      this.obj = {action: 'delete' , payload: del_Id};
      return this.obj;
    }
  }
  updateFunc(newRecord, updateID){
    if (newRecord === 'ERROR') {
      return 'ENTER a correct command';
    }
    else if(updateID === true || newRecord === []){
      return 'PLZ ENTER THE ID or the new record';
    }
    else{
      this.obj = {action: 'update' , payload: newRecord , id: updateID};
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

}


module.exports = Input;
