const backgroundImage = document.querySelector('.background-image')
const percentageEl = document.querySelector('.percentage')
percentage = 0
let blurValue = 11
let opacityValue = 1.4
let percentageId = setInterval(updatePercentage, 40)


function updatePercentage(){
    percentage++ 
    opacityValue -= 0.01
    percentageEl.textContent = percentage + '%'
    percentageEl.style.opacity = opacityValue
    blurValue -= 0.1
    backgroundImage.style.filter = `blur(${blurValue}px)`;
    if(percentage  >= 100){
        clearInterval(percentageId)
        percentageEl.textContent = ''
    }

}

