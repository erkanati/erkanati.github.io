const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes')) //sessionStorage we have also, but after turning off session will disappear
console.log(notes)

if(notes){
    notes.forEach(note => addNewNote(note))
}


addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()

        updateNotes()
    
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateNotes()
        
    })

    document.body.appendChild(note)
}

function updateNotes(){
    const notestext = document.querySelectorAll('textarea')

    const notes = []

    notestext.forEach(note => notes.push(note.value))

    console.log(notes) //[array with single Items]
    localStorage.setItem('notes', JSON.stringify(notes))
}

/* only string
localStorage.setItem('name', 'Brad') -> localStorage.setItem('name', JSON.stringify()) 
localStorage.getItem('name') ->         JSON.parse(localStorage.getItem('name'))
localStorage.removeItem('name')
*/


