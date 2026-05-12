const contenedorEquipo = document.getElementById('contenedor-equipo')

// funcion que obtiene los integrantes desde la API
const cargarEquipo = async () => {
    try {
        const respuesta = await fetch('http://localhost:3000/equipo')
        const integrantes = await respuesta.json()

        // limpia el contenedor antes de agregar las cards
        contenedorEquipo.innerHTML = ''

        // recorre cada integrante del JSON
        integrantes.forEach(miembro => {
        contenedorEquipo.innerHTML += `
            <div class="personal">
            <img src="${miembro.imagen}" alt="${miembro.nombre}">
            
            <h3>${miembro.nombre}</h3>

            <br>

            <p class="puesto">${miembro.puesto}</p>

            <br>

            <p class="leyenda">${miembro.leyenda}</p>

            <br>

            <p class="contacto">
                Telefono: ${miembro.telefono}
                <br>
                Email: ${miembro.email}
            </p>
            </div>
        `
        })
    } catch (error) {
    console.log(error)
    }
}

// ejecuta la funcion
cargarEquipo()