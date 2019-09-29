[![npm version](https://badge.fury.io/js/simple-text-ellipsis.svg)](https://badge.fury.io/js/simple-text-ellipsis) ![coverage](https://img.shields.io/badge/code%20coverage-100%25-blue) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# Simple-Text-Ellipsis #

Simple-Text-Ellipsis is an NPM module used to create simple text ellipsis' with React and Material UI.

## Installation

Use Node's package manager [npm](https://docs.npmjs.com/) to install in the root of the project you want to use the component.

```bash
npm install simple-text-ellipsis
```

## Usage

Using Character Example
```javascript
import React from 'react';
import SimpleEllipsis from 'simple-text-ellipsis';

const yourComponent = () => {
  const text = 'This is an example of using SimpleEllipsis component';
  const count = 15;
  const breakpoints = {
    lg: { count: 20 }, // 'This is an example o...' displays at lg break point
    xl: { count: 30 }  // 'This is an example of using Si...' at xl break point
  }; // 'This is an exam...' will display for all other break points since
     //   count prop is specified
  const propsObject = { breakpoints, count, text };
  return (
      <React.Fragment>
        <SimpleEllipsis {...propsObject} />
      </React.Fragment>);
};
export default yourComponent;
```

Using Words Example
```javascript
import React from 'react';
import SimpleEllipsis from 'simple-text-ellipsis';

const yourComponent = () => {
  const text = 'This is an example of using SimpleEllipsis component';
  const truncatedBy = 'words';
  const breakpoints = {
    xs: { count: 3 }, // at xs break point, displays 'This is an...'
    sm: { count: 6 }  // at sm, displays 'This is an example of using...'
  }; // will display entire text string for all other breakpoints since no
     //   count prop is specified
  const propsObject = { breakpoints, text, truncatedBy };
  return (
      <React.Fragment>
        <SimpleEllipsis {...propsObject} />
      </React.Fragment>);
};
export default yourComponent;
```

### Props
- ```allowShortenedWords``` boolean: when truncating by characters, allow cutting off words. default true
- ```breakpoints``` object: breakpoints for specific [Material UI breakpoints](https://material-ui.com/customization/breakpoints/)
  - ```breakpoints.xs``` object: contains count key to override default prop of count
  - ```breakpoints.sm``` object
  - ```breakpoints.md``` object
  - ```breakpoints.lg``` object
  - ```breakpoints.xl``` object
- ```count``` number: character/word count to cut text off at; when not provided, text will not be truncated
- ```ellipsis``` string: text to be displayed as ellipsis; defaults to '...', no ellipsis displayed if passed as null
- ```text``` string: text to be displayed with ellipsis at end
- ```truncatedBy``` string: determing how count is used to truncate text; 'characters' or 'words'. defaults to 'characters'

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
