const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runMyAnimation()

function resetDOM(){
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) =>{
        num.classList.value =''
    })

    nums[0].classList.add('in')
}

function runMyAnimation(){
    nums.forEach((num, index)=>{
       // console.log(num, index)
        const nextToLast = nums.length-1;

        num.addEventListener('animationend', (event)=>{
            if(event.animationName === 'justIn' && index !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')

            } else if(event.animationName === 'justOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}


replay.addEventListener('click', ()=>{
    resetDOM()
    runMyAnimation()

})