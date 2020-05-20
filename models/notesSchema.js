'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  text: { required: true, type: String },
  category: { required: true, type: String },
});

const model = mongoose.model('notes', notes);
module.exports = model;