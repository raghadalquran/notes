'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {
    
  it('test the note if the console.log appears', ()=> {
    let newObj = {
      note : {action: 'add', payload: 'hello'},
      id : {action: 'add', payload: 'hello'},
    };
    let note = new Notes(newObj);
    note.add(newObj);
    expect(console.log).toHaveBeenCalled();
  });


});
