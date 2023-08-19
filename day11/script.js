const texts = document.querySelectorAll('.text')

window.addEventListener('keydown', (event) => {
    texts[0].innerHTML = (event.key === ' ') ? 'Space' : event.key 
    texts[1].innerHTML = event.keyCode
    texts[2].innerHTML = event.code
})