//randomuser.me YEEEAAAH!!!

const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (event)=> filterdata(event.target.value))

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=150')

    const { results } = await res.json()

    result.innerHTML = '' //just clearing result

    results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first, user.name.last}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>

        `

        result.appendChild(li)
    })

}


function filterdata(search){
    listItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search.toLowerCase())){
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

