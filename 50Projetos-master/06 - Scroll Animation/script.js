boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top
        const boxBottom = box.getBoundingClientRect().bottom

        if(boxTop < triggerBottom - 100){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }

        if(boxBottom < triggerBottom -300){
            box.classList.remove('show')
        }
    })
}