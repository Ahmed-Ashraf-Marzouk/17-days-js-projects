const btn = document.querySelector('button')
const nav = document.querySelector('nav')
const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
const l1 = document.querySelector('.line1')
const l2 = document.querySelector('.line2')

btn.addEventListener('click', () => {
    nav.classList.toggle('closed')
    ul.classList.toggle('closed')
    lis.forEach((li) =>{
        li.classList.toggle('closed')
    })
    btn.classList.toggle('closed')
    l1.classList.toggle('closed')
    l2.classList.toggle('closed')
})