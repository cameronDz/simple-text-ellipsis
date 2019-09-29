import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import * as lib from './lib';

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

  const createTextWithEllipsis = breakpointObject => {
    const baseObject = { allowShortenedWords, count, ellipsis, text, truncateBy };
    const mergedObject = lib.mergeTrimObjectFromBreakpointObject(baseObject, breakpointObject);
    const trimmedText = lib.trimTextByTrimObject(mergedObject);
    return !!trimmedText && trimmedText;
  };

  const createTextWithEllipsisBasedOnBreakpoints = () => {
    return breakpointSizes.map((item, key) => {
      const only = lib.removeValueFromArray(breakpointSizes, item);
      return (
        <Hidden key={key} only={only}>
          {createTextWithEllipsis(breakpoints[item])}
        </Hidden>);
    });
  };

  const createEllipsis = () => {
    return !!breakpoints && Object.keys(breakpoints).length > 0
      ? createTextWithEllipsisBasedOnBreakpoints()
      : createTextWithEllipsis();
  };

  return !!text && createEllipsis();
};

simpleEllipsis.propTypes = propTypes;
export default simpleEllipsis;
