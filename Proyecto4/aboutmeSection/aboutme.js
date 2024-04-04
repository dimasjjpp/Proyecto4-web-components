import './aboutme.css'
import { data } from '../data.js'
export const aboutMeTemplate = `
<h3>ABOUT ME</h3>
<div id="aboutme-text-container">
  <p>${data.aboutMe}</p>
  <a id="modal-selector">That's me</a>
</div>
<div id="modal" class="displayNone">
  <div class="modal-container">
    <span id="close-modal">&times;</span>
    <div id="selfimage-link" class="">
      <img src="./public/assets/Arcadi.jpeg" alt="Dog image" />
    </div>
    <div id="modal-text-container"
    <p>Ops... that's my dog Arcadi</p>
    <a id="second-modal-selector">That's me..for real</a>
    </div>
  </div>
</div>
<div id="secondModalContainer" class="displayNone">
  <div class="modal-container">
    <span id="close-second-modal">&times;</span>
      <div id="second-selfimage-link">
        <img src="./public/assets/selfimg.jpg" alt="Dog image" />
        
      </div>
  </div>
</div>
`
document.addEventListener('DOMContentLoaded', () => {
  const modalSelector = document.getElementById('modal-selector')
  const modalContainer = document.getElementById('modal')
  const closeModal = document.getElementById('close-modal')
  const secondModalSelector = document.getElementById('second-modal-selector')
  const secondModalContainer = document.getElementById('secondModalContainer')
  const closeSecondModal = document.getElementById('close-second-modal')

  modalSelector.addEventListener('click', () => {
    if (secondModalContainer.style.display === 'block') {
      modalContainer.style.display = 'none'
    } else {
      modalContainer.style.display = 'block'
    }
  })
  closeModal.addEventListener('click', () => {
    modalContainer.style.display = 'none'
  })
  secondModalSelector.addEventListener('click', () => {
    if (modalContainer.style.display === 'block') {
      modalContainer.style.display = 'none'
      secondModalContainer.style.display = 'block'
    } /* else {
    secondModalContainer.style.display = 'block'
  } */
  })
  closeSecondModal.addEventListener('click', () => {
    secondModalContainer.style.display = 'none'
  })
  window.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
      modalContainer.style.display = 'none'
    }
  })
})
