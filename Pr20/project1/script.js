const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message){
    const formCtrl = input.parentElement
    formCtrl.className = 'form-control error'
    const small = formCtrl.querySelector('small')
    small.innerText = message
}

function showSuccess(input){
    const formCtrl = input.parentElement
    formCtrl.className = 'form-control success'
}

function checkEmail(input){
    const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(valid.test(input.value.trim())){
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArray){
    inputArray.forEach(function(input){
        // console.log(input.value)

        if(input.value.trim() === ''){
            showError(input, ` ${getFieldName(input)} is reqired!!!`)
        } else {
            showSuccess(input)
        }
    } )
}

function checkLength(input, min, max){
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
}

function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    } else{
        showSuccess(input1)
    }

}


form.addEventListener('submit', function(event){
    event.preventDefault()

    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 8, 18)
    checkEmail(email)
    checkPasswords(password, password2)
})



//BORIIIIIIING:

// console.log(username.value)


//in EventListener

// if(username.value === ''){
    //     showError(username, 'Username is required!!!')
    // } else {
    //     showSuccess(username)
    // }

    // if(email.value === ''){
    //     showError(email, 'Email is required!!!')
    // } else if(!checkEmail(email.value)){
    //     showError(email, 'Email is not valid')
    // } else {
    //     showSuccess(email)
    // }

    // if(password.value === ''){
    //     showError(password, 'password is required!!!')
    // } else {
    //     showSuccess(password)
    // }
    // if(password2.value === '' || password.value !== password2.value){
    //     showError(password2, 'password 2 is required!!!')
    // } else {
    //     showSuccess(password2)
    // }
