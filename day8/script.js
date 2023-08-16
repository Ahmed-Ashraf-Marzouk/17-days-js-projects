const email = document.querySelector('.email')
const password = document.querySelector('.password')
const emailLetters = document.querySelectorAll('.email-l')
const passwordLabel = document.querySelector('.password-label')
email.onfocus = () => {
    emailLetters.forEach((letter) => {
        letter.classList.add('active')
    })
}

email.onblur = () => {
    console.log(email.value.length == 0)
    if(email.value.length == 0)
    {
        emailLetters.forEach((letter) => {
            letter.classList.remove('active')
        })
    }
   
}



passwordLabel.innerHTML = passwordLabel.innerText.split("").map((element, idx) => {
    `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
}).join('')