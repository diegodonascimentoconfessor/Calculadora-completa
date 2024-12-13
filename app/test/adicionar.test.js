
global.document = {
  getElementById: jest.fn().mockReturnValue({
      value: ''
  })
};

// Função a ser testada
function adicionarNumero(numero) {
  document.getElementById("input").value += numero;
}

// Teste para adicionar números
describe('Função adicionarNumero', () => {

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
});
