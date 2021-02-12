// Pegar todas as classes .panel e transformar em um "array"
const panels = document.querySelectorAll('.panel')

// Remover a classe active de todos os elementos
function removeActiveClasses() {
    panels.forEach( (panel) => {
        panel.classList.remove('active')
    })
}

// Quando clicado, chama a função de remover classes e depois adciona a classe activo no selecionado
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
