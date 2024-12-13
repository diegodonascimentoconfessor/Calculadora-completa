
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
  
  // Testes de integração
  describe('Calculadora - Teste de Integração', () => {
    beforeEach(() => {
      // Resetando a simulação do DOM antes de cada teste
      document.getElementById("input").value = '';
    });
  
    test('deve realizar uma soma corretamente', () => {
      // Simulando a interação do usuário
      adicionarNumero('5');  // Usuário entra com o número 5
      definirOperacao('+');   // Usuário escolhe a operação de soma
      adicionarNumero('3');  // Usuário entra com o número 3
      calcularResultado();    // Usuário clica para calcular o resultado
  
      // Verificando o resultado exibido
      expect(document.getElementById("input").value).toBe('8');  // O valor esperado após a soma deve ser 8
    });
  
    test('deve realizar uma subtração corretamente', () => {
      // Simulando a interação do usuário
      adicionarNumero('10');  // Usuário entra com o número 10
      definirOperacao('-');    // Usuário escolhe a operação de subtração
      adicionarNumero('4');   // Usuário entra com o número 4
      calcularResultado();     // Usuário clica para calcular o resultado
  
      // Verificando o resultado exibido
      expect(document.getElementById("input").value).toBe('6');  // O valor esperado após a subtração deve ser 6
    });
  
    test('deve realizar uma multiplicação corretamente', () => {
      // Simulando a interação do usuário
      adicionarNumero('7');   // Usuário entra com o número 7
      definirOperacao('*');    // Usuário escolhe a operação de multiplicação
      adicionarNumero('2');   // Usuário entra com o número 2
      calcularResultado();     // Usuário clica para calcular o resultado
  
      // Verificando o resultado exibido
      expect(document.getElementById("input").value).toBe('14');  // O valor esperado após a multiplicação deve ser 14
    });
  
    test('deve realizar uma divisão corretamente', () => {
      // Simulando a interação do usuário
      adicionarNumero('9');   // Usuário entra com o número 9
      definirOperacao('/');    // Usuário escolhe a operação de divisão
      adicionarNumero('3');   // Usuário entra com o número 3
      calcularResultado();     // Usuário clica para calcular o resultado
  
      // Verificando o resultado exibido
      expect(document.getElementById("input").value).toBe('3');  // O valor esperado após a divisão deve ser 3
    });
  
    test('deve limpar o display corretamente', () => {
      // Simulando a interação do usuário
      adicionarNumero('5');   // Usuário entra com o número 5
      limparDisplay();         // Usuário clica no botão de limpar
  
      // Verificando que o display foi limpo
      expect(document.getElementById("input").value).toBe('');
    });
  });
  