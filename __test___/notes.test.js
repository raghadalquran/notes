'use strict';

const Input = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {
    
    it('add() does nothing with invalid options', ()=> {
        let options = new Notes();
        options.add();
        expect(console.log).not.toHaveBeenCalled();
    });

    it('add() validating and using the correct command line', ()=> {
        let newNotes = new Notes();
        newNotes.add();
        expect(console.log).toHaveBeenCalled();
    });


});
