const { definirOperacao, calcularResultado, limparDisplay } = require("../../js/calcular");

describe("Calculadora", () => {
  beforeEach(() => {
    document.body.innerHTML = '<input id="input" value="" />';
  });

  describe("definirOperacao", () => {
    it("deve definir a operação e limpar o display", () => {
      const input = document.getElementById("input");
      input.value = "25";

      definirOperacao("+");

      expect(input.value).toBe(""); // Display deve estar limpo
    });
  });

  describe("calcularResultado", () => {
    it("deve calcular a soma corretamente", () => {
      const input = document.getElementById("input");
      input.value = "30";

      // Simula definir a operação
      definirOperacao("+");
      input.value = "20";

      // Calcula o resultado
      calcularResultado();

      expect(input.value).toBe("50"); // Resultado da soma
    });

    it("deve calcular a subtração corretamente", () => {
      const input = document.getElementById("input");
      input.value = "30";

      definirOperacao("-");
      input.value = "10";

      calcularResultado();

      expect(input.value).toBe("20");
    });

    it("deve calcular a multiplicação corretamente", () => {
      const input = document.getElementById("input");
      input.value = "5";

      definirOperacao("*");
      input.value = "6";

      calcularResultado();

      expect(input.value).toBe("30");
    });

    it("deve calcular a divisão corretamente", () => {
      const input = document.getElementById("input");
      input.value = "40";

      definirOperacao("/");
      input.value = "8";

      calcularResultado();

      expect(input.value).toBe("5");
    });

    it("deve retornar 'Erro' para operação inválida", () => {
      const input = document.getElementById("input");
      input.value = "10";

      definirOperacao("?");
      input.value = "5";

      calcularResultado();

      expect(input.value).toBe("Erro");
    });
  });

  describe("limparDisplay", () => {
    it("deve limpar o display e os valores armazenados", () => {
      const input = document.getElementById("input");
      input.value = "100";

      limparDisplay();

      expect(input.value).toBe(""); // Display deve estar limpo
    });
  });
});
