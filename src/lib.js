
const trimTextByCount = (text = '', count) => {
  let trimmedText = '';
  if (!!text && typeof text === 'string') {
    trimmedText = !! (!!count && count > 0 && text.length > count)
      ? text.substring(0, count-1)
      : text;
  }
  return trimmedText
};

export {
  trimTextByCount
};
