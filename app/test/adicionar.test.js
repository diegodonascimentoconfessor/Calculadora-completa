const adicionar = require('../../js/adicionar');

describe('adicionarNumero', () => {
  beforeEach(() => {
    document.body.innerHTML = '<input id="input" value="" />';
  });

  it('deve adicionar o número ao valor atual do input', () => {
    const input = document.getElementById('input');
    input.value = '123';

    adicionar.adicionarNumero('4');

    expect(input.value).toBe('1234');
  });

  it('deve adicionar múltiplos números ao valor atual do input', () => {
    const input = document.getElementById('input');
    input.value = '';

    adicionar.adicionarNumero('5');
    adicionar.adicionarNumero('6');

    expect(input.value).toBe('56');
  });

  it('deve funcionar corretamente com um input vazio', () => {
    const input = document.getElementById('input');

    adicionar.adicionarNumero('7');

    expect(input.value).toBe('7');
  });
});
