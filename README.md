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
  const gridCounts = {
    lg: 20, // at lg break point, will display 'This is an example o...'
    xl: 30  // at xl break point, will display 'This is an example of using Si...'
  };        // will display 'This is an exam...' for all other break points since count prop is specified
  return (
      <React.Fragment>
        <SimpleEllipsis count={count} gridCounts={gridCounts} text={text} />
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
  const gridCounts = {
    xs: 3, // at xs break point, will display 'This is an...'
    sm: 6  // at xs break point, will display 'This is an example of using...'
  };       // will display entire text string for all other breakpoints since no count prop is specified
  return (
      <React.Fragment>
        <SimpleEllipsis gridCount={gridCounts} text={text} truncatedBy={truncatedBy} />
      </React.Fragment>);
};
export default yourComponent;
```

### Props
- ```count``` number: character/word count to cut text off at; when not provided, text will not be truncated
- ```gridCounts``` object: counts for specific [Material UI breakpoints](https://material-ui.com/customization/breakpoints/)
  - ```gridCounts.xs``` number
  - ```gridCounts.sm``` number
  - ```gridCounts.md``` number
  - ```gridCounts.lg``` number
  - ```gridCounts.xl``` number
- ```text``` string: text to be displayed with ellipsis at end
- ```truncatedBy``` string: determing how count is used to truncate text; 'characters' or 'words'. defaults to 'characters'

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
