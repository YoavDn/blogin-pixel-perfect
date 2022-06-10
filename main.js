'use strict'

function toggleMenu() {
  document.body.classList.toggle('menu-toggle')
}

function toggleModal() {
  const elModal = document.querySelector('.modal')
  const elOverlay = document.querySelector('.overlay')
  elModal.classList.toggle('hidden')
  elOverlay.classList.toggle('hidden')
}
