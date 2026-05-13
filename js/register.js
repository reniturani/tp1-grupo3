const URL_API = 'https://tp3-grupo3.onrender.com'

const formulario = document.getElementById('formulario-registro')
const inputEmail = document.getElementById('email')
const divMensaje = document.getElementById('mensaje')

inputEmail.addEventListener('blur', function() {
  const emailIngresado = inputEmail.value
  const emailLimpio = emailIngresado.trim()

  if (emailLimpio === '') {
    return
  }

  verificarSiEmailExiste(emailLimpio)
})

async function verificarSiEmailExiste(email) {
  const url = URL_API + '/register/check/' + encodeURIComponent(email)

  const respuesta = await fetch(url)
  const datos = await respuesta.json()

  if (datos.existe === true) {
    divMensaje.textContent = 'El email ya esta registrado'
    divMensaje.classList.add('mostrar')
  } else {
    divMensaje.classList.remove('mostrar')
  }
}

formulario.addEventListener('submit', async function(e) {
  e.preventDefault()

  const nombre = document.getElementById('nombre').value.trim()
  const apellido = document.getElementById('apellido').value.trim()
  const email = inputEmail.value.trim()
  const password = document.getElementById('password').value

  try {
    const respuesta = await fetch(URL_API + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: nombre, apellido: apellido, email: email, password: password })
    })

    const datos = await respuesta.json()

    if (respuesta.ok === true) {
      divMensaje.textContent = 'Usuario registrado exitosamente'
      divMensaje.className = 'mensaje mostrar'
      formulario.reset()
    } else {
      divMensaje.textContent = 'Error al procesar la solicitud'
      divMensaje.className = 'mensaje mostrar'
    }
  } catch (error) {
    divMensaje.textContent = 'Error al procesar la solicitud'
    divMensaje.className = 'mensaje mostrar'
  }
})