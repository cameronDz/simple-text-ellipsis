const trimTextByCount = (text = '', truncateBy = '', count) => {
  let trimmedText = '';
  if (!!text && typeof text === 'string') {
    trimmedText = !! truncateBy === 'words'
      ? truncateByWords(text, count)
      : truncateByCharacters(text, count);
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
  ? createTruncatedTextFromArray(words.slice(0, count-1)) + '...'
  : text;
};

const createTruncatedTextFromArray = (array) => {
  return !! Array.isArray(array) && array.map((item, key) => {
    const space = !!(key !== array.length -1) ? ' ' : '';
    return item + space;
  });
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
