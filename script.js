let cartas = [];
let quantidade = 0;



function iniciar(){
    quantidade =  Number(prompt ("Quantas cartas você quer jogar ? (Entre 4 e 14)"));

    while (quantidade < 4 || quantidade > 14 || quantidade%2 !== 0 ){
        quantidade = Number(prompt("Esolha apenas números entre 4 e 14!"));
    }
}
    iniciar();  

for(let index = 0; index < quantidade/2; index++){
    cartas.push(index+1);
    cartas.push(index+1);
}
    cartas.sort(comparador);

function addCards(){

    for (let i = 0; i <= quantidade-1; i++ ){
    let cardTemplate = `
        <div class="card">
            <div class="idCard">${cartas[i]}</div>
            <div class="frente face" onclick="selecionar(this)">
                <img src="./Img/Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" alt="Parrot">
            </div>
            <div class="back-face face">
                <img src="./Img/Arquivos Úteis - Projeto 04 - Parrot Card Game/${cartas[i]}.gif" alt="">
            </div> 
        </div>
        `;
        document.querySelector('.cartinhas').innerHTML += cardTemplate;   
    }
}
    addCards();
   
    

function comparador() { 
    return Math.round(Math.random()) - 0.5; 
}



function selecionar(elemento) {
    elemento.parentNode.classList.toggle("virada");
}


