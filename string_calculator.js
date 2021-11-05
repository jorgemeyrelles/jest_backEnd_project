const UserException = (value) => {
  if (value === 1) throw new 'separador no fim';
  if (value === 2) throw new 'numero negativo na string';
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
  return (string.split(/[^0-9]+/))
    .filter((e) => e[0] !== undefined).reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

module.exports = { add };
