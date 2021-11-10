const error1 = 'Not to allow a separator at the end';
const error2 = 'Negative number(s) not allowed'

// validação
const validateInput = (string) => {
  const arr = [];
  // esta expressão regular identifica separadores mesmo antes de "\n"
  if ((/[^\d]+/).test(string[string.length - 1])) {
    arr.push(error1);
  }
  // regex /-?\d+/g retorna todos numeros inteiros inclusive os negativos
  string.match(/-?\d+/g).map((e, i) => {
    if (Number(e) < 0) {
      arr.push(`${error2}: ${Number(e)}, found at position ${i}`);
    }
  });
  // typeError para enviar os valores válidos
  if (arr.length > 0) throw new TypeError(arr.join('\n'));
}

const add = (string) => {
  // identifica se recebe string diferente de null
  if (string.length === 0) return 0;
  //inicia validação
  validateInput(string);
  // ignora numeros maiores de 1000
  const lessThen = string.match(/-?\d+/g).filter((e) =>  e < 1000);
  return lessThen.reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

module.exports = { add };
