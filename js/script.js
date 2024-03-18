function genSquare(cont){
    let newEl = document.createElement('article');
    newEl.innerHTML = '<span>' + cont + '</span>'
    newEl.classList.add('square');
    return newEl;
}

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
                newSquare.classList.toggle('clicked')
                console.log(i + 1)
            });
            newSquare.classList.add('square-100')
            gridEl.appendChild(newSquare); 

        }
        
    }else if(select.value === "2"){
        for (let i = 0 ; i < 81 ; i++){

            let newSquare = genSquare(i + 1);
        
            newSquare.addEventListener('click' , function(){
                newSquare.classList.toggle('clicked')
                console.log(i + 1)
            });
            newSquare.classList.add('square-81')
            gridEl.appendChild(newSquare); 

        }
    }else{
        for (let i = 0 ; i < 49 ; i++){

            let newSquare = genSquare(i + 1);
        
            newSquare.addEventListener('click' , function(){
                newSquare.classList.toggle('clicked')
                console.log(i + 1)
            });
            newSquare.classList.add('square-49')
            gridEl.appendChild(newSquare); 

        }
    }     
})