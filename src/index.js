import React, { Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { removeValueFromArray, trimTextByCount } from './lib';

const propTypes = {
  count: PropTypes.number,
  gridCounts: PropTypes.shape({
    xs:  PropTypes.number,
    sm:  PropTypes.number,
    md:  PropTypes.number,
    lg:  PropTypes.number,
    xl:  PropTypes.number
  }),
  text: PropTypes.string,
  truncateBy: PropTypes.string
};

/**
 * @param {*} count Number
 * @param {*} gridCounts Object
 * @param {*} text String
 * @param {*} truncateBy String
 */
const simpleEllipsis = ({count, gridCounts, text, truncateBy}) => {
  const gridSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  const createTextWithEllipsis = trimCount => {
    const trimmedText = trimTextByCount(text, truncateBy, trimCount);
    return !! trimmedText && (
      <Fragment>
        {trimmedText}
      </Fragment>);
  };

  const createHiddenGrid = () => {
    return gridSizes.map((item, key) => {
      const only = removeValueFromArray(gridSizes, item);
      const gridCount = !!gridCounts && !!gridCounts[item]
        ? gridCounts[item]
        : count;
      return (
        <Hidden key={key} only={only}>
          {createTextWithEllipsis(gridCount)}...
        </Hidden>)
    });
  };

  const createEllipsis = () => {
    return !! gridCounts
      ? createHiddenGrid()
      : createTextWithEllipsis(count);
  };

  return !! text && createEllipsis();
};

simpleEllipsis.propTypes = propTypes;
export default simpleEllipsis;
