const UserException = (value) => {
  if (value === 1) throw new 'separador no fim';
  if (value === 2) throw new `Negative number(s) not allowed`;
};

const add = (string) => {
  if (string.length === 0) {
    return 0;
  } else if (string[string.length - 1] === ',') {
    return UserException(1);
  }
  // regex /-?\d+/g retorna todos os numeros inclusive os negativos
  string.match(/-?\d+/g).map((e) => {
    if (Number(e) < 0) return UserException(2);
  });
  // esta expressão regular identifica "," e "\n"
  const lessThen = string.match(/-?\d+/g).filter((e) =>  e < 1000);
  // console.log(lessThen.reduce((a, b) => parseInt(a) + parseInt(b), 0));
  return lessThen.reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

module.exports = { add };
