const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

//for(const empty of empties)
empties.forEach((empty)=>{
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})


function dragStart(){
    this.className += ' hold'
    setTimeout(()=>this.className = 'invisible', 0)
    
}

function dragEnd(){
    this.className='fill'

}


function dragOver(event){
    event.preventDefault()

}


function dragEnter(event){
    event.preventDefault()
    this.className += ' hovered'
    
}


function dragLeave(){
    this.className = 'empty'
}


function dragDrop(){
    this.className = 'empty' 

    this.append(fill) 
}

const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (event)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        event.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        event.target.innerHTML = 'Light mode'
    }
})