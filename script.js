//variaveis 
const botao = document.querySelector('.btn');
const botaoReset = document.querySelector('.btn2');
const botaoVoltar = document.querySelector('.btn3');

let contador = 0;
// faz o botao 1 ser clicavel e mudar oq ta escrito
botao.addEventListener('click', () => {
    botao.textContent = `MORTES (${contador})`;

});
//função que faz o botão contar 
function incrementarContador() {
    contador++;
    botao.textContent = `Mortes (${contador})`;
}
// faz o click contar
botao.addEventListener('click', () => {
    incrementarContador();
});

//faz o espaço contar tambem
document.addEventListener('keydown', (event) => {

    if (event.code === 'Space') {
        incrementarContador();
    }
});
//funçãp pro botão 2 resetar
function resetarContador() {
    contador = 0;
    botao.textContent = `Contador (${contador})`;
}
//faz o botao 2 resetar no click
botaoReset.addEventListener('click', () => {
    resetarContador();})
//faz o botão 2 resetar no R
    document.addEventListener('keydown', (event) => {

        if (event.code === 'KeyR') {
            resetarContador();
        }
    })

//função pro botão 3 voltar
function voltarContador(){
    contador--;
    botao.textContent = `Mortes (${contador})`;
}
//faz o botão 3 voltar no click
botaoVoltar.addEventListener('click', () => {
    voltarContador();
})
//faz o botão 3 voltar no backspace
document.addEventListener('keydown', (event) =>{
    if (event.code === 'Backspace'){
        voltarContador();
    }
    
})