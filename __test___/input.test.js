'use strict';

const Input = require('../lib/input.js');

let testSchema = {
  id: { type: 'number', required: true },
  name: { type: 'string', required: true },
};

let inValidObjectA = {};

let validObject = {
  id: 3,
  name: 'sarah',
};

let validator = new Input(testSchema);

describe('Input Module', () => {
  it('if invalid objects , always return false', () => {
    expect(validator.validate(inValidObjectA)).toBe(false);
  });
  it('if valid objects , return true', () => {
    expect(validator.validate(validObject)).toBe(true);
  });
  it('.isString return false when not given a string', () => {
    expect(validator.isString(3)).toBe(false);
  });
  it('.isString return true when given a string', () => {
    expect(validator.isString('test')).toBe(true);
  });
});

