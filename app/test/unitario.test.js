// calculadora.test.js

// Função de mock para simular o comportamento do DOM
global.document = {
    getElementById: jest.fn().mockReturnValue({
      value: ''
    })
  };
  
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
      document.getElementById("input").value = String(resultado);  // Forçar o resultado a ser uma string
  }
  
  function limparDisplay() {
      document.getElementById("input").value = "";
      valor1 = "";
      valor2 = "";
      operacao = "";
  }
  
  // Testes
  describe('Calculadora', () => {
    beforeEach(() => {
      // Resetando a simulação do DOM antes de cada teste
      document.getElementById("input").value = '';
    });
  
    test('deve adicionar números corretamente', () => {
      adicionarNumero('5');
      expect(document.getElementById("input").value).toBe('5');
      adicionarNumero('3');
      expect(document.getElementById("input").value).toBe('53');
    });
  
    test('deve definir operação corretamente', () => {
      adicionarNumero('5');
      definirOperacao('+');
      expect(valor1).toBe('5');
      expect(operacao).toBe('+');
    });
  
    test('deve calcular o resultado corretamente para a operação de soma', () => {
      adicionarNumero('5');
      definirOperacao('+');
      adicionarNumero('3');
      calcularResultado();
      expect(document.getElementById("input").value).toBe('8');  // Comparando como string
    });
  
    test('deve calcular o resultado corretamente para a operação de soma', () => {
      adicionarNumero('5');
      definirOperacao('+');
      adicionarNumero('3');
      calcularResultado();
      expect(parseFloat(document.getElementById("input").value)).toBe(8);  // Comparando como número
    });
  
    test('deve limpar o display corretamente', () => {
      adicionarNumero('5');
      limparDisplay();
      expect(document.getElementById("input").value).toBe('');
      expect(valor1).toBe('');
      expect(valor2).toBe('');
      expect(operacao).toBe('');
    });
  });
  