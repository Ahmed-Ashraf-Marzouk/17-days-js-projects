const numbers = document.querySelectorAll('.item-count')

const twitterCount = 12000
const facebookCount = 5000
const youtubeCount = 7500

let counts = [twitterCount, facebookCount, youtubeCount]


window.addEventListener('load', () => {

    let intervalId = setInterval(() => {
        numbers.forEach((number, idx) => {
            let n = Number(number.textContent)
            if( n < counts[idx]){
                n += 100
                number.textContent = n
            }
            })
        if(numbers(numbers[0].textContent) === twitterCount)
            clearInterval(intervalId)
    }, 20)
})