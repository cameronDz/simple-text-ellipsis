import { expect } from 'chai';
import { extractKeyFromBreakpointObject, removeValueFromArray, trimTextByCount } from '../src/lib';

describe('lib tests', function () {
  describe('# trimTextByCount', function () {
    it('no params provide - returns empty string', function () {
      const expected = '';
      const actual = trimTextByCount();
      expect(actual).to.equal(expected);
    });

    it('falsy (NaN) text params provide - returns empty string', function () {
      const expected = '';
      const actual = trimTextByCount(NaN);
      expect(actual).to.equal(expected);
    });

    it('falsy (null) text params provide - returns empty string', function () {
      const expected = '';
      const actual = trimTextByCount(null);
      expect(actual).to.equal(expected);
    });

    it('only valid text params provide - returns text', function () {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, falsy (NaN) count param, no truncateBy param - returns text', function () {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected, NaN);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, falsy (null) count param, no truncateBy param - returns text', function () {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected, null);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count param greater than text conut, no truncateBy param - returns full text', function () {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected, 40);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count param less than text conut, no truncateBy param - returns substring of text', function () {
      const original = 'This is expected';
      const expected = 'This...';
      const actual = trimTextByCount(original, 4);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count param less than text conut, random truncateBy param - returns substring of text truncated by chars', function () {
      const original = 'This is expected';
      const expected = 'This...';
      const actual = trimTextByCount(original, 4, 'random');
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, invalid count param, truncateBy param is words, returns full text', function () {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected, NaN, 'words');
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count NOT longer than text word count, truncateBy param is words, returns full text', function () {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected, 4, 'words');
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count longer than text word count, truncateBy param is words, returns truncated text', function () {
      const original = 'This is expected should not be this long';
      const expected = 'This is expected should...';
      const actual = trimTextByCount(original, 4, 'words');
      expect(actual).to.equal(expected);
    });
  });

  describe('# removeValueFromArray', function () {
    it('non array (Number) arr params provided, - returns empty array', function () {
      const expected = [];
      const actual = removeValueFromArray(4);
      expect(actual).to.eql(expected);
    });

    it('non array (null) arr params provided, - returns empty array', function () {
      const expected = [];
      const actual = removeValueFromArray(null);
      expect(actual).to.eql(expected);
    });

    it('array params provided with no value param, - returns exact array', function () {
      const expected = [23, 'Dog', 3, { bird: 'gird' }, 'TESTING'];
      const actual = removeValueFromArray(expected);
      expect(actual).to.eql(expected);
    });

    it('array params provided with value param no in array, - returns exact array', function () {
      const expected = [23, 'Dog', 3, { bird: 'gird' }, 'TESTING'];
      const actual = removeValueFromArray(expected, 'PASSING_TEST');
      expect(actual).to.eql(expected);
    });

    it('array params provided with value param in array, - returns array without element', function () {
      const value = 'BAD_VALUE';
      const original = [23, 'Dog', 3, value, { bird: 'gird' }, 'TESTING'];
      const expected = [23, 'Dog', 3, { bird: 'gird' }, 'TESTING'];
      const actual = removeValueFromArray(original, value);
      expect(actual).to.eql(expected);
    });
  });

  describe('# extractKeyFromBreakpointObject', function () {
    it('null breakpoints object - return null', function () {
      const expected = null;
      const actual = extractKeyFromBreakpointObject(null, 'test', 'test');
      expect(actual).to.eql(expected);
    });

    it('undefined breakpoints object - return null', function () {
      const expected = null;
      const actual = extractKeyFromBreakpointObject(undefined, 'test', 'test');
      expect(actual).to.eql(expected);
    });

    it('null point variable - return null', function () {
      const original = { test: { test: 'someValue' } };
      const expected = null;
      const actual = extractKeyFromBreakpointObject(original, null, 'test');
      expect(actual).to.eql(expected);
    });

    it('undefined point variable - return null', function () {
      const original = { test: { test: 'someValue' } };
      const expected = null;
      const actual = extractKeyFromBreakpointObject(original, undefined, 'test');
      expect(actual).to.eql(expected);
    });

    it('undefined key variable - return null', function () {
      const original = { test: { test: 'someValue' } };
      const expected = null;
      const actual = extractKeyFromBreakpointObject(original, 'test', undefined);
      expect(actual).to.eql(expected);
    });

    it('null key variable - return null', function () {
      const original = { test: { test: 'someValue' } };
      const expected = null;
      const actual = extractKeyFromBreakpointObject(original, 'test', null);
      expect(actual).to.eql(expected);
    });

    it('valid breakpoints object - return objects key value', function () {
      const original = { test: { test: 'someValue' } };
      const expected = 'someValue';
      const actual = extractKeyFromBreakpointObject(original, 'test', 'test');
      expect(actual).to.eql(expected);
    });
  });
});
