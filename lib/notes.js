'use strict';

const Schemanotes = require('../models/notesSchema.js');

class Notes {
  constructor(obj){
  }
  async execute (obj) {
    if(obj.obj){
      if(obj.obj.action === 'add' || obj.obj.action === 'a'){
        return this.add(obj.obj);
      }
      else if(obj.obj.action === 'delete'){
        return this.delete(obj.obj);
      }
      else if(obj.obj.action === 'list' ){
        return this.list(obj.obj);
      }
    }else{
      let strErr = 
      `* you should use (--add with a note and --category for the category) or (--a/-a)
* you should use --list to show all the notes or you can do -- list with a category 
* you should use --delete with an id to delete a note `;
      console.log(strErr);
    }
  }
  async add (obj) {
    const newNote = {
      text: obj.payload,
      category: obj.category,
    };
    const record = new Schemanotes(newNote);
    await record.save();
    console.log(`Adding Note : ${record.text}`);
  }

  async list (obj){
    if (obj.categ === 'all'){
      let findAll = await Schemanotes.find({});
      console.log('all list :',findAll);
    }
    else{
      let findCat = await Schemanotes.find({category: obj.categ});
      console.log(findCat);
    }
  }
  async  delete(obj) {
    try {
      await Schemanotes.findOneAndDelete({_id:obj.id});
    }
    catch(e){
      console.log('Invalid ID');
    }
  }
}




module.exports = Notes;