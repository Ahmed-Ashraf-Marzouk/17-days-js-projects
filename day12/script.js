const cards = document.querySelectorAll('.card')


cards.forEach(card => {
    card.children[2].addEventListener('click', () => {
    card.classList.toggle('active')
    card.children[1].classList.toggle('show')
    card.children[2].children[0].classList.toggle('show')
    card.children[2].children[1].classList.toggle('show')
})
})