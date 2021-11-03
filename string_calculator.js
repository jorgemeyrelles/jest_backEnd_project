const add = (string) => {
  if (string.length === 0) {
    return 0;
  } else if (string[string.length - 1] === ',') {
    throw new 'separador no fim';
  }
  // console.log((string.match(/-?\d+/g).map((e) => Number(e) < 0)));
  // string.match(/-?\d+/g).map((e) => {
  //   if (Number(e) < 0) throw new erro('numero negativo na string');
  // });
  // esta expressão regular identifica "," e "\n"
  return (string.split(/[^0-9]+/))
    .filter((e) => e[0] !== undefined).reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

module.exports = { add };
