let operacao = "";
let valor1 = "";
let valor2 = "";

// eslint-disable-next-line no-unused-vars
function adicionarNumero(numero) {
    document.getElementById("input").value += numero;
}

// eslint-disable-next-line no-unused-vars
function definirOperacao(op) {
    valor1 = document.getElementById("input").value;
    operacao = op;
    document.getElementById("input").value = "";
}

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
function limparDisplay() {
    document.getElementById("input").value = "";
    valor1 = "";
    valor2 = "";
    operacao = "";
}
