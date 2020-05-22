'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');
minimist.mockImplementation(() =>{
  return {
    add: 'hello',
    payload: 'eng',
  };
});

describe('Input Module', () => {
  it('if the command line and the data are valid', () => {
    let noteObj = new Input(); 
    expect(noteObj.valid()).toBeTruthy();
  });
  it('if the command line and the data are not valid', () => {
    let noteObj = new Input();
    noteObj.action = 'mhjh';
    noteObj.payload = 'dfcd';
    expect(noteObj.valid()).toBeFalsy();
  });
});

