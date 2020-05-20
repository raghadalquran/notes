'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  text: { required: true, type: String },
  category: { required: false, type: String },
});

// module.exports = mongoose.model('notes', notes);

const model = mongoose.model('notes', notes);
module.exports = model;