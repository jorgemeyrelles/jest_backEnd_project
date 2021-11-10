const stringFile = require('./string_calculator');

describe('String calculator', () => {
  it('Pega 2 numeros a partir de uma string', () => {
    const strOne = '1,2';
    expect(stringFile.add(strOne)).toBe(3);
  });
  it('Retorna 0 para string vazia', () => {
    const strOne = '';
    expect(stringFile.add(strOne)).toBe(0);
  });
  it('Recebe string com um numero e retorna o proprio', () => {
    const strOne = '1';
    expect(stringFile.add(strOne)).toBe(1);
  });
  it('Recebe string com numeros aleatorios e retorna soma', () => {
    const strOne = '1,2,3,4,5';
    expect(stringFile.add(strOne)).toBe(15);
  });
  it('Recebe string com separadores diferentes de "," e retorna soma', () => {
    const strOne = '1,2\n3';
    expect(stringFile.add(strOne)).toBe(6);
  });
  it('Recebe string maior com separadores diferentes', () => {
    const strOne = '1,2\n3, 4\n5';
    expect(stringFile.add(strOne)).toBe(15);
  });
  it('Recebe string com separador no fim e retorna erro', () => {
    const strOne = '1,2,';
    expect(() => stringFile.add(strOne)).toThrow('Not to allow a separator at the end');
  })
  it('Recebe string com diferentes tipos de separador: retorna 4', () => {
    const strOne = '//;\n1;3';
    expect(stringFile.add(strOne)).toBe(4);
  });
  it('Recebe string com diferentes tipos de separador: retorna 7', () => {
    const strSnd = '//sep\n2sep5';
    expect(stringFile.add(strSnd)).toBe(7);
  });
  it('Recebe string com diferentes tipos de separador: retorna 6', () => {
    const strTrd = '//|\n1|2,3';
    expect(stringFile.add(strTrd)).toBe(6);
  });
  it('Recebe string com separadores e não aceita numeros negativos', () => {
    const strOne = '1,-3';
    // stringFile.add(strOne);
    expect(() => stringFile.add(strOne)).toThrow(`Negative number(s) not allowed: ${-3}`);
  });
  it('Recebe string com separadores diferentes e numeros negativos', () => {
    const strOne = '//|\n1|2,-3,';
    // stringFile.add(strOne);
    expect(() => stringFile.add(strOne)).toThrow(`Not to allow a separator at the end\nNegative number(s) not allowed: ${-3}, found at position ${2}`);
  });
  it('Ignora valores acima de 1000', () => {
    const strOne = '1001, 2';
    // stringFile.add(strOne);
    expect(stringFile.add(strOne)).toBe(2);
  });
});