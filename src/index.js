import React from 'react';

const simpleEllipsis = ({text}) => {
  return !! text && (<React.Fragment>{text}...</React.Fragment>);
};

export default simpleEllipsis;
