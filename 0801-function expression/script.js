// 1. REMOVA O ERRO:
// priceNumber('R$ 99,99'); 
const priceNumber = n => +n.replace('R$', '').replace(',', '.');

/*Resposta:
priceNumber returna undefined na linha 1, pois ainda não foi inicializada.
Functions expressions são definidas em tempo de execução, diferente de function declarations.
A declaração de functions expressions deve ser antes da sua utilização, caso contrário retorna undefined.
dessa forma:
*/

const priceNumber2 = n => +n.replace('R$', '').replace(',', '.');
priceNumber2('R$ 99,99');

/*
Outra alternativa é simplesmente transformar a function expression em function declaration,
pois a chamada poderá ocorrer antes da declaração, dessa forma:
*/

priceNumber3('R$ 99,99');

function priceNumber3(n) {
    return +n.replace('R$', '').replace(',', '.')
};

// 2. Crie uma IIFE e isole o escopo de qualquer código JS.

console.log((function priceNumber3(n) {
    return 'Function (IIFE) executando imediatamente e sem erro.';
})());

/*
Resposta:
No mesmo script js podemos declarar functions com mesmo nome,
porém em escopos diferentes usando IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE).
*/ 

// 3. Como podemos utilizar a função abaixo?
const active = callback => callback();

/*
Resposta:
Por ser uma funtion expression precisamos executar após sua declaração, passando uma função de callback como parâmetro.
*/

active(() => {
    console.log('Teste');
});