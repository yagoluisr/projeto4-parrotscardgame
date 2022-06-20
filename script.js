let cartas = [];
let quantidade = 0;
let cont = 0;

function iniciar() {
    quantidade =  Number(prompt ("Quantas cartas você quer jogar ? (Entre 4 e 14)"));

  while (quantidade < 4 || quantidade > 14 || quantidade % 2 !== 0) {
    quantidade = Number(prompt("Esolha apenas números entre 4 e 14!"));
  }
}
iniciar();

for (let index = 0; index < quantidade / 2; index++) {
  cartas.push(index + 1);
  cartas.push(index + 1);
}
cartas.sort(comparador);

function addCards() {
  for (let i = 0; i <= quantidade - 1; i++) {
    let cardTemplate = `
        <div class="card errado" onclick="selecionar(this)">
            <div class="idCard">${cartas[i]}</div>
            <div class="frente face">
            <img src="./Img/Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" alt="Parrot">
            </div>
            <div class="back-face face">
            <img src="./Img/Arquivos Úteis - Projeto 04 - Parrot Card Game/${cartas[i]}.gif" alt="">
            </div> 
        </div>
        `;
    document.querySelector(".cartinhas").innerHTML += cardTemplate;
  }
}
addCards();

function comparador() {
  return Math.round(Math.random()) - 0.5;
}

function selecionar(elemento) {
  
  let cardSelecionados = document.querySelectorAll(".card.virada.errado");
  cont++;
  
    if(cardSelecionados.length <= 1){
        elemento.classList.add("virada");
    }
    cardSelecionados = document.querySelectorAll(".card.virada.errado");
    
    if(cardSelecionados.length == 2 ){
        let card1 = cardSelecionados[0].querySelector(".idCard").innerHTML;
        let card2 = cardSelecionados[1].querySelector(".idCard").innerHTML;
    
        if(card1 === card2){
            cardSelecionados[0].classList.remove("errado");
            cardSelecionados[1].classList.remove("errado");
            
        }else {
          setTimeout(function () {
            cardSelecionados[0].classList.remove("virada");
            cardSelecionados[1].classList.remove("virada");
        }, 1000);
      }
    }
    terminou();
  }

  function terminou(){
    let cardCorretos = document.querySelectorAll(".card.virada");
    if(cardCorretos.length === cartas.length){
      setTimeout(() =>{ 
      alert(`Parabéns! Você ganhou em ${cont} jogadas!`)
      }, 1000);
    }
  }