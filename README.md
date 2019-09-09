# Simple-Text-Ellipsis #

Simple-Text-Ellipsis is an NPM module used to create simple text ellipsise component.

## Installation

Use Node's package manager [npm](https://docs.npmjs.com/) to install in the root of the project you want to use the component.

```bash
npm install simple-text-ellipsis
```

## Usage

```javascript
import React from 'react';
import SimpleEllipsis from 'simple-text-ellipsis';

const yourComponent = (props) => {
  return (
      <React.Fragment>
        <SimpleEllipsis text={props.text} />
      </React.Fragment>>);
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
