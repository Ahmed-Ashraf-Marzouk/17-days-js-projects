const searchContainer = document.querySelector('.search-container')
const textField = document.querySelector('.text-field')
const searchIcon = document.querySelector('.search-icon')


searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active')
    textField.focus()
    
    // To put the cursor at the end of the text 
    var val = textField.value; //store the value of the element
    textField.value = ''; //clear the value of the element
    textField.value = val; //set that value back.  
})