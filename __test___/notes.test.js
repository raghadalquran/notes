'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {
    
  it('', ()=> {
    let options = new Notes();
    options.add();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('Adding Note : ', ()=> {
    let newNotes = new Notes();
    newNotes.add();
    expect(console.log).toHaveBeenCalled();
  });


});
