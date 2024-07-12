document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('exercise__btn-copy')) {
            let button = event.target
            let codeElement = button.closest('pre').querySelector('code')
            let codeText = codeElement.textContent.trim()

            navigator.clipboard.writeText(codeText.slice(0, -4)).then(() => {
                // Cambiar el texto y el estilo del botón
                button.textContent = 'copied!';
                button.style.backgroundColor = '#238b23'; // Fondo verde

                // Deshabilitar el botón
                button.disabled = true;

                // Esperar 2 segundos antes de restaurar el botón a su estado original
                setTimeout(() => {
                    button.textContent = 'copy';
                    button.style.backgroundColor = ''; // Restaurar el fondo original
                    button.disabled = false;
                }, 1500);
            })
        }
    })
})