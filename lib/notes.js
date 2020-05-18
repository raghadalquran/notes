'use strict';

class Notes {
  constructor(obj){
    this.execute(obj);
  }
  add (obj) {
    if(obj.payload){
      let newNotes = {
        id : Math.floor(Math.random() * 100),
        note : obj.payload,
      };
      console.log('Adding Note : ',newNotes.note);
    }
  }
}


module.exports = Notes;