const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todo')


const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo=>addtodo(todo))
}

form.addEventListener('submit', (event)=>{
    event.preventDefault() //default behavior

    addtodo() 

})

function addtodo(todo){
    let todoText = input.value 
    // console.log(todoText)

    if(todo){ //WHY?
        todoText = todo.text
        console.log('exists!')
    }

    if(todoText){
        const todoElement = document.createElement('li')

        if(todo && todo.completed){
            todoElement.classList.add('completed')
            console.log('completed')
        }

        todoElement.innerText = todoText //input.value

        todoElement.addEventListener('click', ()=>{
            todoElement.classList.toggle('completed')
            updateLocalStorage()
        })

        todoElement.addEventListener('contextmenu', (event)=> {
            event.preventDefault();

            todoElement.remove()
            updateLocalStorage()
            
        })

        todoUL.appendChild(todoElement)

        input.value=''

        updateLocalStorage()
    }

}

// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parse(localStorage.getItem(obj))

function updateLocalStorage(){
    todoElements = document.querySelectorAll('li')

    const todos = []

    todoElements.forEach(todoElement => {
        todos.push({
            text: todoElement.innerText,
            completed: todoElement.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}