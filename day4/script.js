const searchContainer = document.querySelector('.search-container')
const textField = document.querySelector('.text-field')
const searchIcon = document.querySelector('.search-icon')


searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active')
    textField.focus()
    var val = textField.value; //store the value of the element
    textField.value = ''; //clear the value of the element
    textField.value = val; //set that value back.  
})