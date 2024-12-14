// calculadora.test.js
const { limparDisplay } = require('../../js/limpardisplay');

test('limpa as variáveis e o campo de entrada', () => {
    // Mock do DOM
    document.body.innerHTML = '<input id="input" value="10" />'; // Simula o campo de entrada

    // Simulando valores antes de chamar a função
    let valor1 = "10";
    let valor2 = "5";
    let operacao = "+";

    // Chamando a função limparDisplay
    const resultado = limparDisplay();

    // Verificando se as variáveis foram limpas
    expect(resultado.valor1).toBe("");
    expect(resultado.valor2).toBe("");
    expect(resultado.operacao).toBe("");

    // Verificando se o campo de entrada foi limpo
    const input = document.getElementById("input");
    expect(input.value).toBe(""); // O valor do input deve ser uma string vazia
});
