
const soundContainers = document.querySelectorAll('.sound-container')
const sounds = document.querySelectorAll('.sound-item')



soundContainers.forEach((item, idx) => {

   item.onclick = () => {
   sounds.forEach((sound) => {
      if(sound != sounds[idx]){
         sound.pause()
         sound.parentElement.classList.remove('active')
      } 
      })
      sounds[idx].parentElement.classList.toggle('active')
      if(sounds[idx].parentElement.classList.contains('active')){
         sounds[idx].load()
         sounds[idx].play()
         sounds[idx].onended = () => {
            sounds[idx].parentElement.classList.remove('active')
            sounds[idx].parentElement.children[2].textContent++
         }
        
      }
      else{
      sounds[idx].pause()
      }
      
   }
}
)

