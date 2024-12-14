// calculadora.js
let valor1 = "";
let valor2 = "";
let operacao = "";

function limparDisplay() {
    valor1 = "";
    valor2 = "";
    operacao = "";
    document.getElementById("input").value = "";
    return { valor1, valor2, operacao }; // Retorna os valores para o teste
}

module.exports = { limparDisplay };
