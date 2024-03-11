const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, index) =>{
    code.addEventListener('keydown', (event) => {
        if(event.key >= 0 && event.key <=9){
            codes[index].value = ''
            setTimeout(() => codes[index + 1].focus(), 10)
        } else if (event.key === 'Backspace'){
            setTimeout(() => codes[index - 1].focus(), 10)
        }
    })
})