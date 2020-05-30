'use strict';

const notesColl = require('../models/notes-collection');

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
      }else if(obj.obj.action === 'update'){
        return this.update(obj.obj);
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
    const newObj = { text: obj.payload , category: obj.category };
    const record = await notesColl.create(newObj);
    console.log(`Adding Note : ${record.text}`);
  }

  async list (obj){
    if (obj.category === 'all'){
      let findAll = await notesColl.get({});
      console.log('all list :',findAll);
    }
    else{
      let findCat = await notesColl.get({category: obj.category});
      console.log('My list',findCat);
    }
  }
  async  delete(obj) {
    try {
      await notesColl.delete({_id:obj.payload});
    }
    catch(e){
      console.log('Invalid ID');
    }
  }
  async update (obj) {
    const newObj = {id: obj.id , text: obj.payload};
    const record = await notesColl.update(newObj);
  }
}




module.exports = Notes;