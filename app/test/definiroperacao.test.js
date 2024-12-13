// definirOperacao.test.js

// Função de mock para simular o comportamento do DOM
global.document = {
    getElementById: jest.fn().mockReturnValue({
        value: ''
    })
};

// Função a ser testada
let operacao = "";
let valor1 = "";

function definirOperacao(op) {
    valor1 = document.getElementById("input").value;
    operacao = op;
    document.getElementById("input").value = "";
}

// Teste para definir a operação
describe('Função definirOperacao', () => {

    beforeEach(() => {
        // Resetando a simulação do DOM antes de cada teste
        document.getElementById("input").value = '';
        valor1 = "";
        operacao = "";
    });

    test('deve definir operação corretamente', () => {
        document.getElementById("input").value = '5';
        definirOperacao('+');
        expect(valor1).toBe('5');
        expect(operacao).toBe('+');
        expect(document.getElementById("input").value).toBe('');
    });
});
