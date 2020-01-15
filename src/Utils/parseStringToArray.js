const parseStringToArray = array => {
  return array.split(',').map(item => item.trim());
};

export default parseStringToArray;
