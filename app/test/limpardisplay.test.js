// limparDisplay.test.js

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

function limparDisplay() {
    document.getElementById("input").value = "";
    valor1 = "";
    valor2 = "";
    operacao = "";
}

// Teste para limpar o display
describe('Função limparDisplay', () => {

    beforeEach(() => {
        // Resetando a simulação do DOM antes de cada teste
        document.getElementById("input").value = '';
        valor1 = "";
        valor2 = "";
        operacao = "";
    });

    test('deve limpar o display corretamente', () => {
        document.getElementById("input").value = '5';
        limparDisplay();
        expect(document.getElementById("input").value).toBe('');
        expect(valor1).toBe('');
        expect(valor2).toBe('');
        expect(operacao).toBe('');
    });
});
