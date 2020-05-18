'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {
    
  it('test the note if the console.log appears', ()=> {
    let newObj = {
      note : {acion: 'add', payload: 'hello'},
    };
    let note = new Notes(newObj);
    note.add();
    expect(console.log).toHaveBeenCalled();
  });


});
