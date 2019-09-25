const extractKeyFromBreakpointObject = (breakpoints = {}, point = '', key = '') => {
  let value = null;
  if (!!breakpoints && !!point && !!key && breakpoints[point]) {
    value = breakpoints[point][key];
  }
  return value;
};

const trimTextByCount = (text = '', count = 0, truncateBy = '', allowShortenedWords = true) => {
  let trimmedText = '';
  if (!!text && typeof text === 'string') {
    if (truncateBy === 'words') {
      trimmedText = truncateByWords(text, count);
    } else {
      trimmedText = truncateByCharacters(text, count, allowShortenedWords);
    }
  }
  return trimmedText;
};

const truncateByCharacters = (text = '', count, allowShortenedWords = true) => {
  let truncatedText = text;
  if (!!count && count > 0 && text.length > count) {
    if (allowShortenedWords) {
      truncatedText = text.substring(0, count);
    } else {
      truncatedText = truncateTextWithoutShorteningWords(text, count);
    }
    truncatedText += '...';
  }
  return truncatedText;
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

const truncateByWords = (text = '', count) => {
  const words = text.split(' ');
  return !!count && count > 0 && words.length > count
    ? createTruncatedTextFromArray(words.slice(0, count)) + '...'
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
  trimTextByCount
};
