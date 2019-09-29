const extractKeyFromBreakpointObject = (breakpoints = {}, point = '', key = '') => {
  let value = null;
  if (!!breakpoints && !!point && !!key && breakpoints[point]) {
    value = breakpoints[point][key];
  }
  return value;
};

const mergeTrimObjectFromBreakpointObject = (baseObject = {}, breakpointObject = {}) => {
  let mergedObject = {};
  const validBreakpointObject = validObject(breakpointObject);
  if (validObject(baseObject)) {
    mergedObject = baseObject;
    if (validBreakpointObject) {
      mergedObject.allowShortenedWords = typeof breakpointObject.allowShortenedWords !== 'undefined' ? breakpointObject.allowShortenedWords : baseObject.allowShortenedWords;
      mergedObject.count = typeof breakpointObject.count !== 'undefined' ? breakpointObject.count : baseObject.count;
      mergedObject.ellipsis = typeof breakpointObject.ellipsis !== 'undefined' ? breakpointObject.ellipsis : baseObject.ellipsis;
      mergedObject.text = typeof breakpointObject.text !== 'undefined' ? breakpointObject.text : baseObject.text;
      mergedObject.truncateBy = typeof breakpointObject.truncateBy !== 'undefined' ? breakpointObject.truncateBy : baseObject.truncateBy;
    }
  } else if (validBreakpointObject) {
    mergedObject = breakpointObject;
  }
  return mergedObject;
};

const validObject = objectBeingTested => {
  return !!objectBeingTested && typeof objectBeingTested === 'object';
};

const trimTextByTrimObject = (trimTextObject = {}) => {
  let trimmedText = '';
  if (!!trimTextObject && typeof trimTextObject === 'object' && typeof trimTextObject.text === 'string') {
    if (trimTextObject.truncateBy === 'words') {
      trimmedText = truncateByWords(trimTextObject);
    } else {
      trimmedText = truncateByCharacters(trimTextObject);
    }
  }
  return trimmedText;
};

const truncateByCharacters = (trimTextObject = {}) => {
  let truncatedText = '';
  if (!!trimTextObject && typeof trimTextObject === 'object' && typeof trimTextObject.text === 'string') {
    const { allowShortenedWords, count, ellipsis, text } = trimTextObject;
    truncatedText = text;
    if (!!count && count > 0 && text.length > count) {
      if (allowShortenedWords !== false) {
        truncatedText = text.substring(0, count);
      } else {
        truncatedText = truncateTextWithoutShorteningWords(text, count);
      }
      truncatedText += addEllipsis(ellipsis);
    }
  }
  return truncatedText;
};

const addEllipsis = (ellipsis = '') => {
  let textEllipsis = '...';
  if (ellipsis === null) {
    textEllipsis = '';
  } else if (ellipsis) {
    textEllipsis = ellipsis;
  }
  return textEllipsis;
};

const truncateTextWithoutShorteningWords = (text = '', count = 0) => {
  let truncatedText = '';
  if (!!text && !!text.length) {
    const textArray = text.split(' ');
    for (let inc = 0; inc <= textArray.length; inc++) {
      const space = (inc === 0) ? '' : ' ';
      const nextText = truncatedText + space + textArray[inc];
      if (nextText.length < count) {
        truncatedText = nextText;
      } else {
        break;
      }
    }
  }
  return truncatedText;
};

const truncateByWords = (trimTextObject = {}) => {
  let text = '';
  if (!!trimTextObject && !!trimTextObject.text && typeof trimTextObject.text === 'string') {
    const { count, ellipsis } = trimTextObject;
    const words = trimTextObject.text.split(' ');
    if (!!count && count > 0 && words.length > count) {
      text = createTruncatedTextFromArray(words.slice(0, count)) + addEllipsis(ellipsis);
    } else {
      text = trimTextObject.text;
    }
  }
  return text;
};

const createTruncatedTextFromArray = array => {
  let text = '';
  if (Array.isArray(array)) {
    array.map((item, key) => {
      const space = (key !== array.length - 1) ? ' ' : '';
      text += item + space;
    });
  }
  return text;
};

const removeValueFromArray = (array, value) => {
  const newArray = Array.isArray(array) ? array : [];
  return newArray.filter(element => {
    return element !== value;
  });
};

export {
  createTruncatedTextFromArray,
  extractKeyFromBreakpointObject,
  mergeTrimObjectFromBreakpointObject,
  removeValueFromArray,
  truncateByCharacters,
  trimTextByTrimObject,
  truncateByWords,
  truncateTextWithoutShorteningWords
};
