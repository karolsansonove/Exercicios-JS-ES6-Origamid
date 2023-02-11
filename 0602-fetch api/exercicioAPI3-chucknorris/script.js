// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnNext = document.querySelector('.btn-next');

function handleClick() {
    randomJoke();
}

btnNext.addEventListener('click', handleClick);

function randomJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(joke => {
        const pElement = document.querySelector('.joke');
        pElement.innerText = joke.value;
    });
}
randomJoke();