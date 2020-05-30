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
describe('Input Module', () => {
  it('getNote() in case correct input it should return object', () => {
    let noteObj = new Input(); 
    expect(noteObj.getNote('hello')).toEqual({action:'add' , payload:'hello'});
  });
  it('getNote() in case did not enter note', () => {
    let noteObj = new Input(); 
    expect(noteObj.getNote('ERROR')).toEqual('ENTER a NOTE');
  });
  it('getNote() in case wrong arg should return error msg', () => {
    let noteObj = new Input(); 
    expect(noteObj.getNote(true)).toEqual('ENTER a correct message');
  });
  it('listFunc() in case all categories', () => {
    let noteObj = new Input(); 
    expect(noteObj.listFunc(true)).toEqual({action: 'list' , category:'all'});
  });
  it('listFunc() in case specific categories', () => {
    let noteObj = new Input(); 
    expect(noteObj.listFunc('life')).toEqual({action: 'list' , category:'life'});
  });
  it('deleteFunc() with ID', () => {
    let noteObj = new Input(); 
    expect(noteObj.deleteFunc('5ed167e964b2040301f37cc5')).toEqual({action: 'delete' , payload:'5ed167e964b2040301f37cc5'});
  });
  it('deleteFunc() without ID', () => {
    let noteObj = new Input(); 
    expect(noteObj.deleteFunc(true)).toEqual('PLZ ENTER THE ID');
  });
  
});
