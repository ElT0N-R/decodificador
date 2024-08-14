// Chave de criptografia simples (Cifra de César)
const chave = 3;

// Função para criptografar o texto
function criptografar(texto) {
    return texto.split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + chave))
        .join('');
}

// Função para descriptografar o texto
function descriptografar(texto) {
    return texto.split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) - chave))
        .join('');
}

// Função para exibir a mensagem no card
function exibirMensagemNoCard(mensagem) {
    const cardBody = document.querySelector('.card-body');
    const cardImg = document.querySelector('.card-img-top');
    const cardTitle = document.querySelector('.card-title');
    const outputText = document.getElementById('output-text');

    cardImg.style.display = 'none';
    cardTitle.style.display = 'none';
    outputText.style.display = 'block';
    outputText.value = mensagem;
}

// Função para restaurar o estado inicial do card
function restaurarCard() {
    const cardImg = document.querySelector('.card-img-top');
    const cardTitle = document.querySelector('.card-title');
    const outputText = document.getElementById('output-text');

    cardImg.style.display = 'block';
    cardTitle.style.display = 'block';
    outputText.style.display = 'none';
    outputText.value = '';
}

// Evento de clique para criptografar a mensagem
document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = criptografar(inputText);
    exibirMensagemNoCard(encryptedText);
});

// Evento de clique para descriptografar a mensagem
document.getElementById('decrypt-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text').value;
    const decryptedText = descriptografar(outputText);
    exibirMensagemNoCard(decryptedText);
});
