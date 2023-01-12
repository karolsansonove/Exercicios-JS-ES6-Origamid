/////////// EXERCÍCIOS 0409

// Crie uma função que verifique
// corretamente o tipo de dado

function verificarTipo(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarTipo('testeteste')); // [object String]

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4
  }
});

quadrado.lados = 2;
console.log(quadrado.lados); // continua sendo 4

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

configuracao.background = '#000';
console.log(configuracao.background); // continua '#333'
Object.freeze(configuracao);
console.log(Object.isFrozen(configuracao)); // true

  
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));