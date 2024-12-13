let operacao = "";
let valor1 = "";
let valor2 = "";

function adicionarNumero(numero) {
    document.getElementById("input").value += numero;
}

function definirOperacao(op) {
    valor1 = document.getElementById("input").value;
    operacao = op;
    document.getElementById("input").value = "";
}

function calcularResultado() {
    valor2 = document.getElementById("input").value;
    let resultado;
    switch (operacao) {
        case '+':
            resultado = parseFloat(valor1) + parseFloat(valor2);
            break;
        case '-':
            resultado = parseFloat(valor1) - parseFloat(valor2);
            break;
        case '*':
            resultado = parseFloat(valor1) * parseFloat(valor2);
            break;
        case '/':
            resultado = parseFloat(valor1) / parseFloat(valor2);
            break;
        default:
            resultado = "Erro";
    }
    document.getElementById("input").value = resultado;
}

function limparDisplay() {
    document.getElementById("input").value = "";
    valor1 = "";
    valor2 = "";
    operacao = "";
}

module.exports = { adicionarNumero, definirOperacao, calcularResultado, limparDisplay };
