class Calculadora {
  subtracao(num1, num2) {
    return num1 - num2;
  }

  divisao(num1, num2) {
    if (num2 > 0) {
      return num1 / num2;
    } else {
      throw new Error("Erro: Divisor precisa ser maior que zero.");
    }
  }

  aoQuadrado(num) {
    return num ** 2;
  }
}

// Exemplo de uso
const calc = new Calculadora();

const resultadoSubtracao = calc.subtracao(8, 3);
console.log("Resultado da subtração:", resultadoSubtracao);

const resultadoDivisao = calc.divisao(10, 2);
console.log("Resultado da divisão:", resultadoDivisao);

const resultadoAoQuadrado = calc.aoQuadrado(5);
console.log("Resultado ao quadrado:", resultadoAoQuadrado);
