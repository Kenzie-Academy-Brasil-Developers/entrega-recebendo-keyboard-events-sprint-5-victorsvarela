
const mostraDavis = document.getElementById('sec_davis')
const btnReiniciar = document.getElementById('reiniciar')

let boxTop = 200;
let boxLeft = 200;


let esfregao = 0

const showScreen = () => {
    
    mostraDavis.classList.remove('none')

}

btnReiniciar.addEventListener('click', () => {
    mostraDavis.classList.add('none')
    esfregao = 0
})



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    
    switch (keyName){
        case 'ArrowUp':
            alert('esfregue a lâmpada apenas para esquerda e direita')
            break;

        case 'ArrowDown':
            alert('esfregue a lâmpada apenas para esquerda e direita')
            break;
        
        case 'ArrowLeft':
            boxLeft -= 10;
            esfregao++
            break;
            
            case 'ArrowRight':
            boxLeft += 10;
            esfregao++
            break;
    }

    //document.getElementById("box").style.top = `${boxTop}px`;
    document.getElementById("box").style.left = `${boxLeft}px`;

    if (esfregao >= 16){
        showScreen()
    }

});



