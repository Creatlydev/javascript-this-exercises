// Obtener el botón
const backToTopBtn = document.getElementById('backToTopBtn')

// Mostrar el botón cuando el usuario se desplaza hacia abajo 20px desde la parte superior
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTopBtn.classList.add('show')
  } else {
    backToTopBtn.classList.remove('show')
  }
}

// Cuando el usuario hace clic en el botón, se desplaza hacia la parte superior
backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
