const trimTextByCount = (text = '', truncateBy = '', count) => {
  let trimmedText = '';
  if (!!text && typeof text === 'string') {
    if (truncateBy === "words") {
      trimmedText = truncateByWords(text, count);
    } else {
      trimmedText = truncateByCharacters(text, count);
    }
  }
  return trimmedText
};

const truncateByCharacters = (text = '', count) => {
  return !! (!!count && count > 0 && text.length > count)
    ? text.substring(0, count) + '...'
    : text;
};

const truncateByWords = (text = '', count) => {
  const words = text.split(' ');
  return !! (!!count && count > 0 && words.length > count)
    ? createTruncatedTextFromArray(words.slice(0, count)) + '...'
    : text;
};

const createTruncatedTextFromArray = (array) => {
  let text = '';
  if (!! Array.isArray(array)) {
    array.map((item, key) => {
      const space = !!(key !== array.length - 1) ? ' ' : '';
      text += item + space;
    });
  }
  return text;
};

const removeValueFromArray = (array, value) => {
  const newArray = !! Array.isArray(array) ? array : [];
  return newArray.filter(element => {
      return element != value;
  });
};

export {
  removeValueFromArray,
  trimTextByCount
};
