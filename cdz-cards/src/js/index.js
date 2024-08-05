/* 

OBJETIVO 1 - mostrar o próximo cartão da lista quando o usuário clicar no botão para avançar
    
    passo 1 - pegar o elemento HTML que representa o botão

    passo 2 - identificar quando o usuário clicar nesse elemento

    passo 3 - selecionar o próximo cartão da lista

    passo 4 - ocultar o cartão que estava selecionado



OBJETIVO 2 - mostrar o cartão anterior da lista quando o usuário clicar no botão para voltar
    
    passo 1 - pegar o elemento HTML que representa o botão

    passo 2 - identificar quando o usuário clicar nesse elemento

    passo 3 - selecionar o cartão anterior da lista

    passo 4 - ocultar o cartão que estava selecionado

*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartaoSelecionado() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    return;
  }

  esconderCartaoSelecionado();

  cartaoAtual++;

  mostrarCartaoSelecionado(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual < 1) {
    return;
  }

  esconderCartaoSelecionado();

  cartaoAtual--;

  mostrarCartaoSelecionado(cartaoAtual);
});
