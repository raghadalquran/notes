'use strict';

require('@code-fellows/supergoose');

const NotesColl = require('../models/notes-collection');

describe('Notes Collection Model', ()=> {
  let obj = {text: 'test note', category: 'life'};
  it('can create() a new notes ', ()=> {
    return NotesColl.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a notes', ()=> {
    return NotesColl.create(obj)
      .then(record => {
        return NotesColl.get({category: record.category})
          .then(myNotes => {
            Object.keys(obj).forEach((key , index)=> {
              expect(myNotes[index][key]).toEqual(obj[key]);
            });
          });
      });
  });
});