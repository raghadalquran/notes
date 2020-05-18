'use strict';

class Notes {
  constructor(obj){
    this.execute(obj);
  }
  execute (obj) {
    if(obj.payload){
      this.add(obj);
    }
  }
  add (obj) {
    if(obj){
      this.note = obj.payload;
      this.id = Math.floor(Math.random() * 100);
      console.log(`Adding Note : ${this.note}`);
    }
  }
}


module.exports = Notes;