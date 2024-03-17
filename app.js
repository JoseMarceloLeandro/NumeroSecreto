/*
********************************************************************************************************************
Autor...: José Marcelo Leandro Junior
Data....: 16/03/2024
Objetivo: Resolvendo desafio de Logica da Alura, criando um sorteador de numero aleatorios.
********************************************************************************************************************
*/

// Executa a função obterNumeroAleatorio a quantidade de vezes definada pelo usuario no input quantidade na interface
//e os coloca dentro de uma lista(array), mostrar na tela a lista de numero e chama a funcão alterarStatusBotao.
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let escreveNumeroSorteado = document.getElementById('txtNumeroSorteado');
    let numero;
    let lista = [];
    if(de > ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    }else if(quantidade > (ate - de +1)){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    }else {
        for(i = 0;i < quantidade; i++ ){
            numero = obterNumeroAleatorio(de, ate)
            while (lista.includes(numero)){
                numero = obterNumeroAleatorio(de, ate);             
            }
            lista.push(numero);
        } 
    }
        
    escreveNumeroSorteado.innerHTML = `<label id="txtNumeroSorteado" class="texto__paragrafo">Números sorteados:  ${lista}</label>`
    alterarStatusBotao(); 
    
}   

// Sortear numeros inteiros aleatorios entre dois valores determinados que sao passados pelo usuario na função a cima;
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Altera o status do botão reiniciar entre ativo e desabilitado.
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.replace('container__botao-desabilitado', 'container__botao')
    }else{
        botao.classList.replace('container__botao', 'container__botao-desabilitado')
    }
}

// Limpar os valores da lista, bem como os valores dentro dos inputs e voltar o testo de nunhum número sorteado e
//desabilita o botao Reiniciar.
function reiniciar() {
    let lista = []
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alterarStatusBotao();
    document.getElementById('txtNumeroSorteado').innerHTML = '<label id="txtNumeroSorteado" class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
}    

