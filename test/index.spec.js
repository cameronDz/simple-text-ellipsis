import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme'
import SimpleEllipsis from '../src/index';

describe('component tests', () => {
  describe('# simple ellipsis tests', () => {
    it('should render ellipsis with text prop and count less than text length', () => {
      const wrap = mount(<SimpleEllipsis text='TEXT_TEXT' count={5} />);
      const html = wrap.html();
      console.log('html', html);
      expect(html.indexOf('TEXT_...') !== -1).to.equal(true);
    });

    it('should NOT render ellipsis with text prop and no count', () => {
      const wrap = mount(<SimpleEllipsis text='TEXT' />);
      const html = wrap.html();
      expect(html.indexOf('...') === -1).to.equal(true);
    });

    it('should NOT render without text prop', () => {
      const wrap = mount(<SimpleEllipsis />);
      const html = wrap.html();
      expect(!!html).to.equal(false);
    });

    it('should NOT render with text prop of empty string', () => {
      const wrap = mount(<SimpleEllipsis text='' />);
      const html = wrap.html();
      expect(!!html).to.equal(false);
    });
  });
});
