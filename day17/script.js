const search = document.querySelector('.search-bar > input')
const cards = document.querySelectorAll('.card')
const cardsText = document.querySelectorAll('.card > h3')


let searchValues
search.addEventListener('input', () => {
    searchValues = search.value.trim().split(' ')
    // ['Heron']
    cards.forEach((card, idx) => {{
        card.classList.add('hidden')
        searchValues.forEach((sValue) => {
            if(cardsText[idx].textContent.toLowerCase().indexOf(sValue.toLowerCase()) != -1){
                card.classList.remove('hidden')
            }
        })
        
    }})

})