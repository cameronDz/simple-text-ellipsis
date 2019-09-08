import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme'
import SimpleEllipsis from '../src/index';

describe('simple ellipsis tests', () => {
  it('# should render with text prop', () => {
    const wrap = mount(<SimpleEllipsis text='TEXT' />);
    const html = wrap.html();
    expect(html).to.equal('TEXT...');
  });

  it('# should NOT render without text prop', () => {
    const wrap = mount(<SimpleEllipsis />);
    const html = wrap.html();
    expect(!!html).to.equal(false);
  });

  it('# should NOT render with text prop of empty string', () => {
    const wrap = mount(<SimpleEllipsis text='' />);
    const html = wrap.html();
    expect(!!html).to.equal(false);
  });
});
