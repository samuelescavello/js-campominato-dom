// **************

// Il computer deve generare 16 numeri casuali nello stesso range
//  della difficoltà prescelta: le bombe. Attenzione: **nella stessa
//   cella può essere posizionata al massimo una bomba, perciò nell’array    RISOLTOOOOO
//    delle bombe non potranno esserci due numeri uguali.


// In seguito l'utente clicca su una cella: se il numero è presente 
// nella lista dei numeri generati - abbiamo calpestato una bomba - la 
// cella si colora di rosso e la partita termina. Altrimenti la cella     RIOLTOOO
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
let sconfitta = document.getElementById('perso')
let ss = document.getElementById('ss')
let score = 0;
let game = false ;
button.addEventListener('click', function () {
    game = true ; 
    gridEl.innerHTML = '';
    sconfitta.innerHTML= '';
    ss.innerHTML = '';
    score = 0;
    select.value;
    let arrBombe = [];
    let nums;

    if (select.value === "1") {
        for (let i = 0; i < 16; i++) {
            nums = genUniqueNumberRandom(1, 100, arrBombe);
            arrBombe.push(nums)
        } console.log(arrBombe)
        for (let i = 0; i < 100; i++) {
            
            let newSquare = genSquare('');
        

            newSquare.addEventListener('click', function () {
        
                if (game === true){
                    newSquare.classList.add('clicked')
                    console.log(i + 1)
                    score++
                    if(arrBombe.includes(i + 1)){
                        console.log('perso')
                        newSquare.classList.add('clicked2')
                        game = false;
                        sconfitta.innerHTML= 'ritenta , sarai piú fortunato !!!'
                        ss.innerHTML= `hai schivato le bombe per ben ${score - 1} volte`
                    }
                    
                }

            },{once:true}),
           
            newSquare.classList.add('square-100')
            gridEl.appendChild(newSquare);

        }
    
    } else if (select.value === "2") {
        for (let i = 0; i < 16; i++) {
            nums = genUniqueNumberRandom(1, 81, arrBombe);
            arrBombe.push(nums)
        } console.log(arrBombe)
        for (let i = 0; i < 81; i++) {
            
            
            let newSquare = genSquare('');

            newSquare.addEventListener('click', function () {
                if (game === true){
                    newSquare.classList.add('clicked')
                    console.log(i + 1)
                    score++
                    if(arrBombe.includes(i + 1)){
                        console.log('perso')
                        newSquare.classList.add('clicked2')
                        game = false;
                        sconfitta.innerHTML= 'ritenta , sarai piú fortunato !!!'
                        ss.innerHTML= `hai schivato le bombe per ben ${score - 1} volte`
                    }
                    
                }
            },{once:true});
            newSquare.classList.add('square-81')
            gridEl.appendChild(newSquare);

        }
    } else {
        for (let i = 0; i < 16; i++) {
            nums = genUniqueNumberRandom(1, 49, arrBombe);
            arrBombe.push(nums)
        } console.log(arrBombe)
        for (let i = 0; i < 49; i++) {

            let newSquare = genSquare('');

            newSquare.addEventListener('click', function () {
                if (game === true){
                    newSquare.classList.add('clicked')
                    console.log(i + 1)
                    score++
                    if(arrBombe.includes(i + 1)){
                        console.log('perso')
                        newSquare.classList.add('clicked2')
                        game = false;
                        sconfitta.innerHTML= 'ritenta , sarai piú fortunato !!!'
                        ss.innerHTML= `hai schivato le bombe per ben ${score - 1} volte`
                    }
                    
                }
            },{once:true});
            newSquare.classList.add('square-49')
            gridEl.appendChild(newSquare);

        }
    }
});

function genSquare(cont) {
    let newEl = document.createElement('article');
    newEl.innerHTML = '<span>' + cont + '</span>'
    newEl.classList.add('square');
    return newEl;
}

function genUniqueNumberRandom(min, max, listanum) {
    let trovato = false;
    let numRandom;
    while (trovato === false) {
        numRandom = getRndInteger(min, max);
        if (listanum.includes(numRandom) === false) {
            trovato = true;
        }
    }
    return numRandom;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
