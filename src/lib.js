const extractKeyFromBreakpointObject = (breakpoints = {}, point = '', key = '') => {
  let value = null;
  if (!!breakpoints && !!point && !!key && breakpoints[point]) {
    value = breakpoints[point][key];
  }
  return value;
};

const trimTextByTrimObject = (trimTextObject = {}) => {
  let trimmedText = '';
  if (!!trimTextObject.text && typeof trimTextObject.text === 'string') {
    if (trimTextObject.truncateBy === 'words') {
      trimmedText = truncateByWords(trimTextObject);
    } else {
      trimmedText = truncateByCharacters(trimTextObject);
    }
  }
  return trimmedText;
};

const truncateByCharacters = (trimTextObject = {}) => {
  const { allowShortenedWords, count, ellipsis, text } = trimTextObject;
  let truncatedText = text;
  if (!!count && count > 0 && text.length > count) {
    if (allowShortenedWords !== false) {
      truncatedText = text.substring(0, count);
    } else {
      truncatedText = truncateTextWithoutShorteningWords(text, count);
    }
    truncatedText += addEllipsis(ellipsis);
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
}

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
  const { count, ellipsis, text } = trimTextObject;
  const words = !!text && typeof text.split === 'function' && text.split(' ');
  return !!count && count > 0 && words.length > count
    ? createTruncatedTextFromArray(words.slice(0, count)) + addEllipsis(ellipsis)
    : text;
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
  extractKeyFromBreakpointObject,
  removeValueFromArray,
  trimTextByTrimObject
};
