// operacao.test.js
const { definirOperacao } = require('../../js/definiroperacao');

test('define a operação e o valor corretamente', () => {
    // Dados de entrada simulados
    const valorDeEntrada = "10";
    const operacao = "+";

    // Chama a função com valores simulados
    const resultado = definirOperacao(operacao, valorDeEntrada);

    // Verificações
    expect(resultado.valor1).toBe(valorDeEntrada);
    expect(resultado.operacao).toBe(operacao);
});

test('retorna valores corretos para operação de subtração', () => {
    const valorDeEntrada = "5";
    const operacao = "-";

    const resultado = definirOperacao(operacao, valorDeEntrada);

    expect(resultado.valor1).toBe(valorDeEntrada);
    expect(resultado.operacao).toBe(operacao);
});
