// calcularResultado.test.js

// Função de mock para simular o comportamento do DOM
global.document = {
    getElementById: jest.fn().mockReturnValue({
        value: ''
    })
};

// Funções a serem testadas
let operacao = "";
let valor1 = "";
let valor2 = "";

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
    document.getElementById("input").value = String(resultado);  // Forçar o resultado a ser uma string
}

// Teste para calcular o resultado
describe('Função calcularResultado', () => {

    beforeEach(() => {
        // Resetando a simulação do DOM antes de cada teste
        document.getElementById("input").value = '';
        valor1 = "";
        valor2 = "";
        operacao = "";
    });

    test('deve calcular o resultado corretamente para a operação de soma', () => {
        valor1 = '5';
        operacao = '+';
        document.getElementById("input").value = '3';
        calcularResultado();
        expect(document.getElementById("input").value).toBe('8');  // Comparando como string
    });

    test('deve calcular o resultado corretamente para a operação de soma (como número)', () => {
        valor1 = '5';
        operacao = '+';
        document.getElementById("input").value = '3';
        calcularResultado();
        expect(parseFloat(document.getElementById("input").value)).toBe(8);  // Comparando como número
    });
});
