import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { createMount } from '@material-ui/core/test-utils';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import SimpleEllipsis from '../src/index';

describe('component tests', function () {
  describe('# simple ellipsis tests', function () {
    it('should render ellipsis with text prop and count less than text length', function () {
      const wrap = mount(<SimpleEllipsis text='TEXT_TEXT' count={5} />);
      const html = wrap.html();
      expect(html.indexOf('TEXT_...') !== -1).to.equal(true);
    });

    it('should NOT render ellipsis with text prop and no count', function () {
      const wrap = mount(<SimpleEllipsis text='TEXT' />);
      const html = wrap.html();
      expect(html.indexOf('...') === -1).to.equal(true);
    });

    it('should NOT render without text prop', function () {
      const wrap = mount(<SimpleEllipsis />);
      const html = wrap.html();
      expect(!!html).to.equal(false);
    });

    it('should NOT render with text prop of empty string', function () {
      const wrap = mount(<SimpleEllipsis text='' />);
      const html = wrap.html();
      expect(!!html).to.equal(false);
    });

    it('should render all 5 words with no ellipsis', function () {
      const text = 'This should NOT have ellipsis';
      const wrap = mount(<SimpleEllipsis count={5} text={text} truncateBy='words' />);
      const html = wrap.html();
      expect(html).to.equal(text);
    });

    it('should render ellipsis after 6 words', function () {
      const expected = 'This should have an ellipsis but...';
      const text = 'This should have an ellipsis but check';
      const wrap = mount(<SimpleEllipsis count={6} text={text} truncateBy='words' />);
      const html = wrap.html();
      expect(html).to.equal(expected);
    });
  });
  describe('# simple ellipsis breakpoint tests', function () {
    const breakpoints = { xs: { count: 3 } };
    it('should render ellipsis after 6 words', function () {
      const expected = 'This should have...';
      const text = 'This should have an ellipsis but check';
      const theme = createMuiTheme({ props: { MuiWithWidth: { initialWidth: 'xs' } } });
      const wrap = createMount()(
        <MuiThemeProvider theme={theme}>
          <SimpleEllipsis count={6} breakpoints={breakpoints} text={text} truncateBy='words' />
        </MuiThemeProvider>);
      const html = wrap.html();
      expect(html).to.equal(expected);
    });
  });
});
