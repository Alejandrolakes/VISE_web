const formulario = document.getElementById('formulario-contacto');
const mensajeExito = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', function(e){
    e.preventDefault()

    const datos = new FormData(formulario);

    fetch('https://formspree.io/f/mpqbrpay', {
        method: 'POST',
        body: datos,
        headers: { 'Accept': 'application/json' }
    }).then(function(respuesta) {
        if (respuesta.ok) {
            formulario.style.display = 'none';
            mensajeExito.style.display = 'block';
        }
    });
});
