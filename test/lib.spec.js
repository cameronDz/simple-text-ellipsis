import { expect } from 'chai';
import { extractKeyFromBreakpointObject, removeValueFromArray, trimTextByTrimObject } from '../src/lib';

describe('lib tests', function () {
  describe('# trimTextByTrimObject', function () {
    it('no params provide - returns empty string', function () {
      const expected = '';
      const actual = trimTextByTrimObject();
      expect(actual).to.equal(expected);
    });

    it('falsy (NaN) text params provide - returns empty string', function () {
      const trimTextObject = { text: NaN };
      const expected = '';
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('falsy (null) text params provide - returns empty string', function () {
      const trimTextObject = { text: null };
      const expected = '';
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('only valid text params provide - returns text', function () {
      const expected = 'This is expected';
      const trimTextObject = { text: expected };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, falsy (NaN) count param, no truncateBy param - returns text', function () {
      const expected = 'This is expected';
      const trimTextObject = { count: NaN, text: expected };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, falsy (null) count param, no truncateBy param - returns text', function () {
      const expected = 'This is expected';
      const trimTextObject = { count: null, text: expected };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count param greater than text conut, no truncateBy param - returns full text', function () {
      const expected = 'This is expected';
      const trimTextObject = { count: 40, text: expected };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count param less than text conut, no truncateBy param - returns substring of text', function () {
      const original = 'This is expected';
      const expected = 'This...';
      const trimTextObject = { count: 4, text: original };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count param less than text conut, random truncateBy param - returns substring of text truncated by chars', function () {
      const original = 'This is expected';
      const expected = 'This...';
      const trimTextObject = { count: 4, text: original, truncateBy: 'random' };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, invalid count param, truncateBy param is words, returns full text', function () {
      const expected = 'This is expected';
      const trimTextObject = { count: NaN, text: expected, truncateBy: 'words' };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count NOT longer than text word count, truncateBy param is words, returns full text', function () {
      const expected = 'This is expected';
      const trimTextObject = { count: 4, text: expected, truncateBy: 'words' };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count longer than text word count, truncateBy param is words, returns truncated text', function () {
      const original = 'This is expected should not be this long';
      const expected = 'This is expected should...';
      const trimTextObject = { count: 4, text: original, truncateBy: 'words' };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text key, count longer than text word count, truncateBy key words, unique ellipsis key, returns truncated text', function () {
      const original = 'This is expected should not be this long';
      const expected = 'This is expected should***';
      const trimTextObject = { count: 4, ellipsis: '***', text: original, truncateBy: 'words' };
      const actual = trimTextByTrimObject(trimTextObject);
      expect(actual).to.equal(expected);
    });

    it('valid text key, count longer than text word count, truncateBy key is words, null ellipsis key, returns truncated text without ellipsis', function () {
      const original = 'This is expected should not be this long';
      const expected = 'This is expected should';
      const trimTextObject = { count: 4, ellipsis: null, text: original, truncateBy: 'words' };
      const actual = trimTextByTrimObject(trimTextObject);
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
