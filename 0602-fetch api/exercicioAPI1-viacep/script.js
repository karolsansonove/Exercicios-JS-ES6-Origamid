// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const btnSearch = document.querySelector('[data-button]');

const itemAddress = document.querySelectorAll('[data-address] span');
// console.log(section)

function handleClick(event) {
    event.preventDefault();
    const inputCep = document.forms.searchCep.search.value;
    searchCep(inputCep);
}

function searchCep(cep) {
    const api = fetch(`https://viacep.com.br/ws/${cep}/json/`);
    api
    .then(resolve => resolve.json())
    .then(body => {
        printAddress(body);
    })
}

function printAddress(addressObj) {
    document.querySelector('[data-address="cep"]').innerText = addressObj.cep;
    document.querySelector('[data-address="logradouro"]').innerText = addressObj.logradouro;
    document.querySelector('[data-address="complemento"]').innerText = addressObj.complemento;
    document.querySelector('[data-address="bairro"]').innerText = addressObj.bairro;
    document.querySelector('[data-address="localidade"]').innerText = addressObj.localidade;
    document.querySelector('[data-address="uf"]').innerText = addressObj.uf;
}

btnSearch.addEventListener('click', handleClick);