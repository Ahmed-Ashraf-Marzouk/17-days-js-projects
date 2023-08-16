const email = document.querySelector('.email')
const password = document.querySelector('.password')
const email_letters = document.querySelectorAll('.email-l')
email.onfocus = () => {
    email_letters.forEach((letter) => {
        letter.classList.add('active')
    })
}

email.onblur = () => {
    console.log(email.value.length == 0)
    if(email.value.length == 0)
    {
        email_letters.forEach((letter) => {
            letter.classList.remove('active')
        })
    }
   
}