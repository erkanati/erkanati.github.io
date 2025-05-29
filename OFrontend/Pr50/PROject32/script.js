const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const generateEl = document.getElementById('generate')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const clipboardEl = document.getElementById('clipboard')


const randomFunc ={
    lower: getRandomlower,
    upper: getRandomUPPER,
    symbol: getRandomSymbol,
    number: getRandomNumber
}

//new way of making copy: 
clipboardEl.addEventListener('click', ()=>{
    const password = resultEl.innerText

    if(!password){
        return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(password)
            .then(()=> alert('Your password was copied'))
            .catch((error) => console.error("Unfortunately, failed to copy: ", error))}
    else { //OLD WAY:
    const textarea = document.createElement('textarea')
    
    if (!password){
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')

    }
        
})

generateEl.addEventListener('click', ()=>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length)
})

function generatePassword(lower, number, symbol, upper, length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item=>Object.values(item)[0]) //good filtering
    

    if(typesCount === 0) {
        return ''
    }

    for(let i = 0; i< length; i+=typesCount){
        typesArr.forEach(type=>{
            const functionName = Object.keys(type)[0]
            generatedPassword += randomFunc[functionName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword 

}



function getRandomlower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUPPER(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = "!@#$%^&*(){}[]=<>/,.§±~"
    return symbols[Math.floor(Math.random() * symbols.length)]
}


console.log(getRandomlower())
console.log(getRandomUPPER())
console.log(getRandomNumber())
console.log(getRandomSymbol())