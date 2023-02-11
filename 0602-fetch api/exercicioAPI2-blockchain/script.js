// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function consumeAPI() {
    fetch('https://blockchain.info/ticker')
    .then(result => result.json())
    .then(bitcoin => {
        const span = document.querySelector('.price span');
        const priceBuy = bitcoin.BRL.buy;
        span.innerText = priceBuy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        console.log(priceBuy);
    })

}

consumeAPI();
setInterval(consumeAPI, 1000 * 30); // atualiza a cada 30 segundos