import { expect } from 'chai';
import { trimTextByCount } from '../src/lib';

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
});