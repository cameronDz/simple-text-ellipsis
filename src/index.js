import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { extractKeyFromBreakpointObject, removeValueFromArray, trimTextByTrimObject } from './lib';

const propTypes = {
  allowShortenedWords: PropTypes.bool,
  breakpoints: PropTypes.shape({
    xs: PropTypes.object,
    sm: PropTypes.object,
    md: PropTypes.object,
    lg: PropTypes.object,
    xl: PropTypes.object
  }),
  count: PropTypes.number,
  ellipsis: PropTypes.string,
  text: PropTypes.string,
  truncateBy: PropTypes.string
};

/**
 * @param {*} allowShortenedWords boolean
 * @param {*} breakpoints Object
 * @param {*} count Number
 * @param {*} ellipsis String
 * @param {*} text String
 * @param {*} truncateBy String
 */
const simpleEllipsis = ({ allowShortenedWords, breakpoints, count, ellipsis, text, truncateBy }) => {
  const breakpointSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  const createTextWithEllipsis = trimCount => {
    const trimObject = { allowShortenedWords, ellipsis, text, truncateBy, count: trimCount };
    const trimmedText = trimTextByTrimObject(trimObject);
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
