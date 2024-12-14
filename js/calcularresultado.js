// calculadora.js
function calcularResultado(valor1, valor2, operacao) {
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
            if (valor2 == 0) {
                resultado = "Erro"; // Evita divisão por zero
            } else {
                resultado = parseFloat(valor1) / parseFloat(valor2);
            }
            break;
        default:
            resultado = "Erro";
    }
    return resultado;
}

module.exports = { calcularResultado };
