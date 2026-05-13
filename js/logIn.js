const URL_API = tp3-grupo3.onrender.com

const formulario = document.getElementById('formulario-login')
const inputEmail = document.getElementById('email')
const divMensaje = document.getElementById('mensaje')

formulario.addEventListener('submit', async function (e) {
    e.preventDefault()
    const email = inputEmail.value.trim()
    const password = document.getElementById('password').value

    try {
        const respuesta = await fetch(URL_API + '/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        })

        const datos = await respuesta.json()

        if (respuesta.ok === true) {
            divMensaje.textContent = 'Inicio de sesión exitoso'
            divMensaje.className = 'mensaje mostrar'
            formulario.reset()
        } else {
            divMensaje.textContent = 'Error al iniciar sesión'
            divMensaje.className = 'mensaje mostrar'
        }
    }  catch (error) {
        divMensaje.textContent = 'Error al procesar la solicitud'
        divMensaje.className = 'mensaje mostrar'
    }
})