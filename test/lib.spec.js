import { expect } from 'chai';
import { removeValueFromArray, trimTextByCount } from '../src/lib';

describe('lib tests', () => {
  describe('# trimTextByCount', () => {
    it('no params provide - returns empty string', () => {
      const expected = '';
      const actual = trimTextByCount();
      expect(actual).to.equal(expected);
    });

    it('falsy (NaN) text params provide - returns empty string', () => {
      const expected = '';
      const actual = trimTextByCount(NaN);
      expect(actual).to.equal(expected);
    });

    it('falsy (null) text params provide - returns empty string', () => {
      const expected = '';
      const actual = trimTextByCount(null);
      expect(actual).to.equal(expected);
    });

    it('only valid text params provide - returns text', () => {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, falsy (NaN) count param - returns text', () => {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected, NaN);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, falsy (null) count param - returns text', () => {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected, null);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count param greater than text conut - returns full text', () => {
      const expected = 'This is expected';
      const actual = trimTextByCount(expected, 40);
      expect(actual).to.equal(expected);
    });

    it('valid text params provide, count param less than text conut - returns substring of text', () => {
      const text = 'This is expected';
      const expected = 'This';
      const actual = trimTextByCount(expected, 4);
      expect(actual).to.equal(expected);
    });
  });

  describe('# removeValueFromArray', () => {
    it('non array (Number) arr params provided, - returns empty array', () => {
      const expected = [];
      const actual = removeValueFromArray(4);
      expect(actual).to.eql(expected);
    });

    it('non array (null) arr params provided, - returns empty array', () => {
      const expected = [];
      const actual = removeValueFromArray(null);
      expect(actual).to.eql(expected);
    });

    it('array params provided with no value param, - returns exact array', () => {
      const expected = [23, 'Dog', 3, { bird: 'gird'}, 'TESTING'];
      const actual = removeValueFromArray(expected);
      expect(actual).to.eql(expected);
    });

    it('array params provided with value param no in array, - returns exact array', () => {
      const expected = [23, 'Dog', 3, { bird: 'gird'}, 'TESTING'];
      const actual = removeValueFromArray(expected, 'PASSING_TEST');
      expect(actual).to.eql(expected);
    });

    it('array params provided with value param in array, - returns array without element', () => {
      const value = 'BAD_VALUE';
      const original = [23, 'Dog', 3, value, { bird: 'gird'}, 'TESTING'];
      const expected = [23, 'Dog', 3, { bird: 'gird'}, 'TESTING'];
      const actual = removeValueFromArray(original, value);
      expect(actual).to.eql(expected);
    });
  });
});