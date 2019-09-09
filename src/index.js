import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { trimTextByCount } from './lib';

const propTypes = {
  text: PropTypes.string,
  count: PropTypes.number,
  gridCounts: PropTypes.object
};

/**
 * @param {*} text String
 * @param {*} count Number
 * @param {*} gridCounts Object
 */
const simpleEllipsis = ({text, count, gridCounts}) => {
  const gridSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  const createTextWithEllipsis = trimCount => {
    const trimmedText = trimTextByCount(text, trimCount);
    return !! trimmedText && (
      <React.Fragment>
        {trimmedText}...
      </React.Fragment>);
  };

  const createHiddenGrid = () => {
    return gridSizes.map((item, key) => {
      const gridCount = !!gridCounts && !!gridCounts[item]
        ? gridCounts[item]
        : count;
      return (
        <Hidden key={key} only={item}>
          {createTextWithEllipsis(gridCount)}...
        </Hidden>)
    });
  };

  const createEllipsis = () => {
    return !! gridCounts
      ? createHiddenGrid()
      : createTextWithEllipsis();
  };

  return !! text && createEllipsis();
};

simpleEllipsis.propTypes = propTypes;
export default simpleEllipsis;
