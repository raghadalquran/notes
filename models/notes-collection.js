'use strict';

const notes = require('./notesSchema');

class Notes {

  constructor() {
  }
  
  async create(record) {
    let newRecord = new notes(record);
    return await newRecord.save();
  }
  async get(category) {
    return await notes.find(category);
  }
  
  async update(_id, record) {
    return await notes.findByIdAndUpdate(_id, record, { new: true });
  }
  
  async delete(_id) {
    return await notes.findByIdAndDelete(_id);
  }
  
}
  
module.exports = new Notes();