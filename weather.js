const changeButton = document.getElementById('changeLocationButton')
const closenModal = document.getElementById("closenModal")
const backgroundModal = document.getElementById("modalBackground")

closenModal.style.visibility = 'hidden'
backgroundModal.style.visibility = 'hidden'

function openModal() {
  closenModal.style.visibility = 'visible'
  backgroundModal.style.visibility = 'visible'
}

changeButton.addEventListener('click', openModal)

const cancelButton = document.getElementById('buttonCancel')

function closeModal() {
  closenModal.style.visibility = 'hidden'
  backgroundModal.style.visibility = 'hidden'
  } 
  
  cancelButton.addEventListener('click', closeModal)
