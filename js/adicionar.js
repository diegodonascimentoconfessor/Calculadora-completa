function adicionarNumero(numero) {
  const input = document.getElementById('input');
  input.value += numero;
}

module.exports = { adicionarNumero };
