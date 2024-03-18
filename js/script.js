// **************

// Il computer deve generare 16 numeri casuali nello stesso range
//  della difficoltà prescelta: le bombe. Attenzione: **nella stessa
//   cella può essere posizionata al massimo una bomba, perciò nell’array    RISOLTOOOOO
//    delle bombe non potranno esserci due numeri uguali.


// In seguito l'utente clicca su una cella: se il numero è presente 
// nella lista dei numeri generati - abbiamo calpestato una bomba - la 
// cella si colora di rosso e la partita termina. Altrimenti la cella 
// cliccata si colora di azzurro e l'utente può continuare a cliccare 
// sulle altre celle.


// La partita termina quando il giocatore clicca su una bomba o quando 
// raggiunge il numero massimo possibile di numeri consentiti
//  (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non 
// era una bomba.

let gridEl = document.getElementById('grid')
let button = document.querySelector('.btn');
let select = document.querySelector('.form-select')
button.addEventListener('click' , function(){
    gridEl.innerHTML = '';
    select.value
    if(select.value === "1"){
        for (let i = 0 ; i < 100 ; i++){

            let newSquare = genSquare(i + 1);
        
            newSquare.addEventListener('click' , function(){
                newSquare.classList.add('clicked')
                console.log(i + 1)
            });
            newSquare.classList.add('square-100')
            gridEl.appendChild(newSquare); 

        }
        
    }else if(select.value === "2"){
        for (let i = 0 ; i < 81 ; i++){

            let newSquare = genSquare(i + 1);
        
            newSquare.addEventListener('click' , function(){
                newSquare.classList.add('clicked')
                console.log(i + 1)
            });
            newSquare.classList.add('square-81')
            gridEl.appendChild(newSquare); 

        }
    }else{
        for (let i = 0 ; i < 49 ; i++){

            let newSquare = genSquare(i + 1);
        
            newSquare.addEventListener('click' , function(){
                newSquare.classList.add('clicked')
                console.log(i + 1)
            });
            newSquare.classList.add('square-49')
            gridEl.appendChild(newSquare); 

        }
    }     
})

function genSquare(cont){
    let newEl = document.createElement('article');
    newEl.innerHTML = '<span>' + cont + '</span>'
    newEl.classList.add('square');
    return newEl;
}

let arrBombe = [];
let nums;

for (let i = 0 ; i < 16 ; i++){
     nums = genUniqueNumberRandom(1, 20, arrBombe);
     arrBombe.push(nums)
}console.log(arrBombe)

function genUniqueNumberRandom (min, max, listanum){
    let trovato = false; 
    let numRandom ;
    while(trovato === false ){
        numRandom = getRndInteger (min , max);
        if (listanum.includes(numRandom)=== false){
            trovato = true;
        } 
    }
    return numRandom;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
