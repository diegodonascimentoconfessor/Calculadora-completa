// calculadora.test.js
const { calcularResultado } = require('../../js/calcularresultado');

test('realiza soma corretamente', () => {
    const resultado = calcularResultado(10, 5, '+');
    expect(resultado).toBe(15);
});

test('realiza subtração corretamente', () => {
    const resultado = calcularResultado(10, 5, '-');
    expect(resultado).toBe(5);
});

test('realiza multiplicação corretamente', () => {
    const resultado = calcularResultado(10, 5, '*');
    expect(resultado).toBe(50);
});

test('realiza divisão corretamente', () => {
    const resultado = calcularResultado(10, 5, '/');
    expect(resultado).toBe(2);
});

test('evita divisão por zero', () => {
    const resultado = calcularResultado(10, 0, '/');
    expect(resultado).toBe("Erro");
});

test('retorna erro para operação inválida', () => {
    const resultado = calcularResultado(10, 5, '%');
    expect(resultado).toBe("Erro");
});
