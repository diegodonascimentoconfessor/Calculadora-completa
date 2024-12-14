// operacao.js
function definirOperacao(op, inputValue) {
    let valor1 = inputValue; // Recebe o valor de fora (simulando a entrada do usuário)
    let operacao = op;
    return { valor1, operacao }; // Retorna os valores para poder ser testado
}

module.exports = { definirOperacao };
