const largeCup = document.querySelector('.large-cup')
const cups = document.querySelectorAll('.small-cup')
const text = document.querySelector('.large-cup-text')
const percentage = document.querySelector('.large-cup-percentage')

let blue = 0
let countBlue = 0
cups.forEach((cup) => {
    cup.addEventListener('click', () => {
        cup.classList.toggle('active')
        cups.forEach((cup) => {
            if(cup.classList.contains('active')) 
                countBlue++
        })
        blue = (countBlue / 8) * 100
        percentage.textContent = `${blue}%`
        largeCup.style.gap = `${10 - (countBlue / 8) * 10}rem`
        text.innerHTML = `${2 - (countBlue / 8) * 2}L <br> Remained`
        console.log(largeCup)
        largeCup.style.background = `linear-gradient(0deg, blue 0 ${blue}%, white ${blue}% 100%)`
        largeCup.style.height = `${250 + (250 * (countBlue / 100))}px`
        countBlue = 0
    })
})

//