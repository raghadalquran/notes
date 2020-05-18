'use strict';

class Notes {
  constructor(){

  }
  execute (obj) {
    if(obj.payload){
      //console.log(obj.payload)
    }
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