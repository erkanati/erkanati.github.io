const container = document.querySelector('.container')
const wisewords = document.querySelector('.wisewords')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const URL = 'https://testimonialapi.vercel.app/api';


getWords()

async function getWords(){
    const res = await fetch(URL)
    const data = await res.json()
    const dataList = data.map(item => ({
        id: item.id,
        name: item.name,
        photo: item.avatar,
        text: item.message,
        position: item.designation
    }))
    return dataList
    
    data.forEach(list => {
    // //     wisewords.appendChild(user)
    })

}



let index = 0

function update(){
    getWords().then(dataList => {
        // Use dataList here
        const {name, position, photo, text} = dataList[index]

        wisewords.innerHTML = text
        userImage.src = `https://randomuser.me/api/portraits/women/${index+30}.jpg`
        username.innerHTML = name
        role.innerHTML = position

        index++
        
        if(index > dataList.length){
            index = 0
        }
    
    })
}

update()
setInterval(update, 9800)







