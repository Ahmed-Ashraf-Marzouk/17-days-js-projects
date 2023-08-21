// innerHTML
// Collection to array
const text = document.querySelector('#user-input')
const choices = document.querySelector('.choices')

let choicesArray 
text.addEventListener('input', () => {
    choicesArray = text.value.split(',')
    console.log(choicesArray)
    choices.innerHTML = ''
    choicesArray.forEach((choice) => {
        if(choice.trim().length)
            choices.innerHTML += `<p class="choice">${choice}</p>`

        // Another method using DOM APIs
        // const c = document.createElement('p')
        // c.textContent = choice
        // c.classList.add('choice')
        // choices.append(c)
    })
})

window.addEventListener('keydown', (event) => {
    let repeatRand
    let removeTime
    let rand
    if(event.key == 'Enter'){
        repeatRand = setInterval(() => {
            rand = Math.floor(Math.random() * choicesArray.length)
            choices.children[rand].classList.add('chosen')
            removeTime = setTimeout(() => {
                choices.children[rand].classList.remove('chosen')
            }, 200)
        }, 300 );
        
    setTimeout(()=>{
        clearInterval(repeatRand)
        clearTimeout(removeTime)
        choices.children[rand].classList.add('chosen')
    }, 5000)
    }

})
