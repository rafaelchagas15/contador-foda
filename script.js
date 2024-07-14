const botao = document.querySelector('.btn');
const botaoReset = document.querySelector('.btn2');

let contador = 0;

botao.addEventListener('click', () => {
    botao.textContent = `MORTES (${contador})`;

});

function incrementarContador() {
    contador++;
    botao.textContent = `Mortes (${contador})`;
}

botao.addEventListener('click', () => {
    incrementarContador();
});


document.addEventListener('keydown', (event) => {

    if (event.code === 'Space') {
        incrementarContador();
    }
});

function resetarContador() {
    contador = 0;
    botao.textContent = `Contador (${contador})`;
}

botaoReset.addEventListener('click', () => {
    resetarContador();})

    document.addEventListener('keydown', (event) => {

        if (event.code === 'KeyR') {
            resetarContador();
        }
    });