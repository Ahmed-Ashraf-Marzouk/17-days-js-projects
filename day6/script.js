const divs = document.querySelectorAll('div')


yAxis = 0


window.onscroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4
    for(let i = 0; i < divs.length; i++){
            const box = divs[i].getBoundingClientRect().top
            if(triggerBottom > box){
                divs[i].classList.add("show")
            }
            else{
                divs[i].classList.remove("show")
            }
    }
}

