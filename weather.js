const changeButton = document.querySelector('#changeLocationButton')
const closenModal = document.querySelector("#closenModal")
const backgroundModal = document.querySelector("#modalBackground")

closenModal.style.visibility = 'hidden'
backgroundModal.style.visibility = 'hidden'

function openModal() {
  closenModal.style.visibility = 'visible'
  backgroundModal.style.visibility = 'visible'
}

changeButton.addEventListener('click', openModal)

const cancelButton = document.querySelector('#buttonCancel')

function closeModal() {
  closenModal.style.visibility = 'hidden'
  backgroundModal.style.visibility = 'hidden'
  } 
  
  cancelButton.addEventListener('click', closeModal)
