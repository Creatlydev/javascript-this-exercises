document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', handleButtonClick)

  function handleButtonClick (event) {
    if (event.target.classList.contains('exercise__btn-copy')) {
      const button = event.target
      const codeElement = button.closest('pre').querySelector('code')
      const codeText = codeElement.textContent.trim()

      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText.slice(0, -4)).then(() => {
          showCopyFeedback(button)
        })
      } else {
        // Provide an alternative method for copying if Clipboard API is not supported
        const textArea = document.createElement('textarea')
        textArea.value = codeText.slice(0, -4)
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand('copy')
          showCopyFeedback(button)
        } catch (err) {
          // eslint-disable-next-line no-undef
          alert('Clipboard API not supported')
        }
        document.body.removeChild(textArea)
      }
    }
  }

  function showCopyFeedback (button) {
    // Cambiar el texto y el estilo del botón
    button.textContent = 'copied!'
    button.style.backgroundColor = '#238b23' // Fondo verde

    // Deshabilitar el botón
    button.disabled = true

    // Esperar 2 segundos antes de restaurar el botón a su estado original
    setTimeout(() => {
      button.textContent = 'copy'
      button.style.backgroundColor = '' // Restaurar el fondo original
      button.disabled = false
    }, 1500)
  }
})
