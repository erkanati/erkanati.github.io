const header = document.getElementById('header')
const title = document.getElementById('title')
const excerp = document.getElementById('excerpt')

const profile_img = document.getElementById('profile_img')
const namename = document.getElementById('name')
const datedate = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated_bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML =
    `<img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" alt="">`
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerp.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum adipisci.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="">'

    namename.innerHTML = 'ERKANAT'
    datedate.innerHTML = 'Oct 28, 2023'

    animated_bgs.forEach((bg)=>bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((text) => text.classList.remove('animated-bg-text'))

}