/*
Autor...: José Marcelo Leandro Junior
Data....: 16/03/2024
Objetivo: Resolvendo desafio de Logica da Alura, criando um sorteador de numero aleatorios.
*/

// Sortear numeros aleatorios, colocalos dentro de uma lista(array), mostrar na tela a lista de numero,
//desabilitar o botão sortear e habilitar o botao reiniciar.
function sortear(){
    let lista = [];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let escreveNumeroSorteado = document.getElementById('txtNumeroSorteado');
    let btnReiniciar = document.getElementById('btn-reiniciar');
    let btnSortear = document.getElementById('btn-sortear');

    const minCeiled = Math.ceil(de);
    const maxFloored = Math.floor(ate);
    
    for(i = 0;i < quantidade; i++ ){
        let numeroSorteado = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        if(lista.includes(numeroSorteado)){
            i--
            continue 
        }else{
            lista.push(numeroSorteado);
        } 
    }
    escreveNumeroSorteado.innerHTML = `Números sorteados: ${lista}.`
    btnReiniciar.classList.replace('container__botao-desabilitado', 'container__botao');
    btnSortear.classList.replace('container__botao', 'container__botao-desabilitado');
}   

// Limpar os valores da lista, bem como os valores dentro dos inputs e voltar o testo de nunhum número sorteado,
//habilitar o botão Sortear e desabilitar o botao Reiniciar.
function reiniciar() {
    let lista = []
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('btn-reiniciar').classList.replace('container__botao', 'container__botao-desabilitado');
    document.getElementById('btn-sortear').classList.replace('container__botao-desabilitado', 'container__botao');
    document.getElementById('txtNumeroSorteado').innerHTML = 'Números sorteados: nenhum até agora'
}    