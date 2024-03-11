const passwd = document.getElementById('password')
const bg = document.getElementById('background')

passwd.addEventListener('input', (el)=>{
    const input = el.target.value
    const length = input.length

    const bv = 20 - length * 2;

    background.style.filter = `blur(${bv}px)`



})