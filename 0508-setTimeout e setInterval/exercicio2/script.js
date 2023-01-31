// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('[data-iniciar]');
const pausar = document.querySelector('[data-pausar]');
const tempo = document.querySelector('[data-tempo]');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', zerarTempo); // dblclick = double click = duplo clique

let i = 0;
let cronometro;

function iniciarTempo() {
    cronometro = setInterval(() => {
        i++;
        tempo.innerText = i;
    }, 1000);

    iniciar.setAttribute('disabled', ''); // desabilita botão iniciar após click.
}

function pausarTempo() {
    clearInterval(cronometro);
    tempo.innerText = i;

    iniciar.removeAttribute('disabled'); // ao pausar, habilita novamente o botão iniciar
}

function zerarTempo() {
    clearInterval(cronometro);
    i = 0;
    tempo.innerText = i;
}