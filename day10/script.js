const headerText = document.querySelector('.header-text')
const bodyText = document.querySelector('.body-text')
const btn = document.querySelector('.change-button')
let prevRand = 0
let rand = 0
let store 


// Micro
fetchData()

// Macro
setTimeout(() => {
    console.log(store)
}, 2)

async function fetchData() {
    // It takes more than 35 milliseconds!
    let response = await fetch('./data.json');
    let data = await response.json(); 
    store = data.verses[0]
    while(prevRand == rand){
        rand = Math.floor(Math.random() * data.verses.length)
    }
    prevRand = rand
    headerText.innerHTML = data.verses[rand].surah
    bodyText.innerHTML = data.verses[rand].verse
}




btn.addEventListener('click', fetchData)
btn.addEventListener('mousedown', changeSize)

function changeSize(){
    btn.classList.toggle("clicked")
    setTimeout(()=>{
        btn.classList.toggle("clicked")
    }, 100)
}

