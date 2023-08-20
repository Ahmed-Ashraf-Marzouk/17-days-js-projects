const divs = document.querySelectorAll('.rect')
const arrow = document.querySelector('.arrow')

yAxis = 0


window.onscroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4 /* Why these numbers? */
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


arrow.addEventListener('click', pageScroll)


// Why it lags sometimes? 
function pageScroll() {
    window.scrollBy(0, 10); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()', 20); // scrolls every 20 milliseconds
    if ((window.innerHeight + window.offsetHeight) >= document.body.offsetHeight) {
      clearTimeout(scrolldelay);
      console.log("Ahmed Ali")
    //   scrolldelay = setTimeout('PageUp()', 30);
    }
  
  }
  
//   function PageUp() {
//     window.scrollTo(0, 0);
//     setTimeout(function() {
//       pageScroll()
//     }, 600);
//   }