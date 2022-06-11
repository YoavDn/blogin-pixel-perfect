'use strict'

const mediaQuery = window.matchMedia('(max-width: 880px)')
const elDropdown = document.querySelector('.dropdown-content')

if (mediaQuery.matches) {
  elDropdown.classList.add('hidden')
}

function toggleMenu() {
  document.body.classList.toggle('menu-toggle')
}

function toggleModal() {
  const elModal = document.querySelector('.modal')
  const elOverlay = document.querySelector('.overlay')
  elModal.classList.toggle('hidden')
  elOverlay.classList.toggle('hidden')
}

function showDropdown() {
  elDropdown.classList.toggle('hidden')
}
