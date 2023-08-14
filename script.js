// I declare that this code was written by me. 
//I will not copy or allow others to copy my code. 
//I understand that copying code is considered as plagiarism.
 
//Student Name: Aricia Wong 
//Student ID: 22036221
//Class:E63D
//Date/Time Last modified: 14 August 2023 , 20:00 
const username = document.getElementById("username")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("Error")

form.addEventListener('submit') ,(e) => {
    let message = []
    if (username.value === "" || name.value == null){
        message.push ('Username is required')

    }
    if (password.value.length <= 6 ){
        message.push('Passwordmust be longer than 6 characters ')
    }
    if (password.value.length >= 20 ){
        message.push('Passwordmust be less than 20 characters ')
    }
    if (password.value >= 'password' ){
        message.push('Invalid')
    }
    if (message.length > 0 ){
        e.preventDefault()
        errorElement.innerText = message.join(',')
    }
}
