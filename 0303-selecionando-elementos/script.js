// Retorne no console todas as imagens do site

document.querySelectorAll('img').forEach((img) => {
    console.log(img);
});
console.log('\n');

// Retorne no console apenas as imagens que começaram com a palavra imagem

document.querySelectorAll('img[src^="img/imagem"]').forEach((img) => {
    console.log(img);
});
console.log('\n');

// Selecione todos os links internos (onde o href começa com #)

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    console.log(link);
});
console.log('\n');

// Selecione o primeiro h2 dentro de .animais-descricao

console.log(document.querySelector('.animais-descricao h2'));
console.log('\n');

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);
