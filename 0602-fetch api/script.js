const cep = fetch('https://viacep.com.br/ws/94242604/json');

cep
.then(response => response.json())
.then(text => {
    console.log(text)
    const content = document.querySelector('.content');
    content.innerText = text;
})