// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const body = document.querySelector('body');

function callback() {
    body.classList.toggle('vermelho');
}

setInterval(callback, 2000);