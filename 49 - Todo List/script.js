const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')


//Pegar o que estiver gravado no localstorage 
const todos = JSON.parse(localStorage.getItem('todos'))

// se tiver algo, manda pra função
if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

// exibe lis na tela
function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLocalStorage()
        })
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLocalStorage()
        })

        todosUl.appendChild(todoEl)

        input.value = ''

        updateLocalStorage()
    }
}

function updateLocalStorage() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}