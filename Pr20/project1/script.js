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

function checkEmail(email){
    const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase()) 
}


form.addEventListener('submit', function(event){
    event.preventDefault()

    // console.log(username.value)
    if(username.value === ''){
        showError(username, 'Username is required!!!')
    } else {
        showSuccess(username)
    }

    if(email.value === ''){
        showError(email, 'Email is required!!!')
    } else {
        showSuccess(email)
    }

    if(password.value === ''){
        showError(password, 'password is required!!!')
    } else {
        showSuccess(password)
    }
    if(password2.value === '' || password.value !== password2.value){
        showError(password2, 'password 2 is required!!!')
    } else {
        showSuccess(password2)
    }
})
