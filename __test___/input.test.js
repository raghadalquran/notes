'use strict';

const Input = require('../lib/input.js');

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

