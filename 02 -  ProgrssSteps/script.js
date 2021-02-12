const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')


// Vai ser o index dos botões
let currentActive = 1

// Quando clicar no next, soma um no index e chama o update()
// se for maior que o numero de circulos, ele não soma mais
next.addEventListener('click', () => {
    currentActive++


    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update()
})

// Quando clicar no prev, tira um no index e chama o update()
// Se for menot que o numero de circulos, ele não subtrai mais
prev.addEventListener('click', () => {
    currentActive--


    if(currentActive < 1){
        currentActive = 1
    }

    update()
})

// Responsavel por atualizar os itens na tela
function update(){

    // Se o circulo for maior que o index add a classe active, caso contrario remove ela
    circles.forEach((circle, index) => {
        if (index < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // pegando todas as classes active
    const actives = document.querySelectorAll('.active')

    // Coloca o tamanho da barrinha de acordo com a qtd de classes ativas / pelos circulos    
    progress.style.width = (actives.length -1 ) / (circles.length -1 ) * 100 + "%"

    // se o index for igual a 1, desabilita o Desabled do btn prev
    // se o index for igual ao tamanho dos circulos, desabilita o next
    // se tiver no meio tempo, habilita tudo
    if(currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else{
        prev.disabled = false
        next.disabled = false
    }
}