'use strict';

const History = require('../models/notesSchema.js');

class Notes {
  constructor(obj){
    // this.execute(obj);
  }
  execute (obj) {
    if(obj.action === 'add' || obj.action === 'a'){
      this.add(obj);

    }
    else if(obj.action === 'delete'){
      this.delete(obj);
    }
    else if(obj.action === 'list' ){
      this.list(obj);
    }
    else{
      console.log(obj);
    }
  }
  async add (obj) {
    const newNote = {
      text: obj.payload,
      category: obj.category,
    };
    const record = new History(newNote);
    await record.save();
    console.log(`Adding Note : ${newNote.text}`);
  }

  async list (obj){
    if (obj.category === 'all'){
      let findAll = await History.find({});
      console.log(findAll);
    }
    else{
      let findCat = await History.find({category: obj.category});
      console.log(findCat);
    }
  }
  delete(obj) {

  }
}



module.exports = Notes;