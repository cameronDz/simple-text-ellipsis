import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { extractKeyFromBreakpointObject, removeValueFromArray, trimTextByCount } from './lib';

const propTypes = {
  breakpoints: PropTypes.shape({
    xs: PropTypes.object,
    sm: PropTypes.object,
    md: PropTypes.object,
    lg: PropTypes.object,
    xl: PropTypes.object
  }),
  count: PropTypes.number,
  text: PropTypes.string,
  truncateBy: PropTypes.string
};

/**
 * @param {*} count Number
 * @param {*} breakpoints Object
 * @param {*} text String
 * @param {*} truncateBy String
 */
const simpleEllipsis = ({ count, breakpoints, text, truncateBy }) => {
  const breakpointSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  const createTextWithEllipsis = trimCount => {
    const trimmedText = trimTextByCount(text, trimCount, truncateBy);
    return !!trimmedText && trimmedText;
  };

  const createTextWithEllipsisBasedOnBreakpoints = () => {
    return breakpointSizes.map((item, key) => {
      const only = removeValueFromArray(breakpointSizes, item);
      const breakpointValue = extractKeyFromBreakpointObject(breakpoints, item, 'count');
      const textCount = !!breakpointValue || breakpointValue === 0
        ? breakpointValue
        : count;
      return (
        <Hidden key={key} only={only}>
          {createTextWithEllipsis(textCount)}
        </Hidden>);
    });
  };

  const createEllipsis = () => {
    return !!breakpoints && Object.keys(breakpoints).length > 0
      ? createTextWithEllipsisBasedOnBreakpoints()
      : createTextWithEllipsis(count);
  };

  return !!text && createEllipsis();
};

simpleEllipsis.propTypes = propTypes;
export default simpleEllipsis;
