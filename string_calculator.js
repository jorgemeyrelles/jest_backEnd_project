const add = (string) => {
  if (string.length === 0) {
    return 0;
  } else if (string[string.length - 1] === ',') {
    throw new 'separador no fim';
  }
  // esta expressão regular identifica "," e "\n"
  return string.split(/[^0-9]+/).reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

module.exports = { add };
