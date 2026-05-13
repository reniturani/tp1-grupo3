const cardContainer = document.querySelector('#card-container')

async function servicios() {
    try {
        const response = await fetch('https://tp3-grupo3.onrender.com/servicios/')
        const data = await response.json()

        data.forEach(servicio => {
    const div = document.createElement('div')
    div.classList.add('tarjeta-servicio')

    div.innerHTML = `
        <h2>${servicio.desc}</h2>
        <img src="../assets/reparacion.jpg" width="300" height="200">
        <p>Precio: <span class="precio">${servicio.precio}</span></p>
        <button>Ver detalle</button>
        <div class="detalle"></div>
    `

    const boton = div.querySelector('button')
    const detalleDiv = div.querySelector('.detalle')

    boton.addEventListener('click', async () => {
        try {
            const response = await fetch(`https://tp3-grupo3.onrender.com/servicios/${servicio.id}`)
            const data = await response.json()

            detalleDiv.innerHTML = `
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Descripción:</strong> ${data.desc}</p>
                <p><strong>Precio:</strong> $${data.precio}</p>
            `

            const boton = div.querySelector('button')
            const detalleDiv = div.querySelector('.detalle-servicio')

            boton.addEventListener('click', async () => {
                try {
                    const responseDetalle = await fetch(`https://tp3-grupo3.onrender.com/servicios/${servicio.id}`)
                    const detalle = await responseDetalle.json()

                    detalleDiv.innerHTML = `
                        <p><strong>Detalle:</strong> ${detalle.detalle_largo}</p>
                        <p><strong>Tiempo:</strong> ${detalle.tiempo_entrega}</p>
                        <p><strong>Categoría:</strong> ${detalle.categoria}</p>
                        <p><strong>Disponible:</strong> ${detalle.disponible ? 'Sí' : 'No'}</p>
                    `
                } catch {
                    console.log('Error al obtener detalle')
                }
            })

            cardContainer.append(div)
        })

    } catch {
        console.log('Error, no se pudieron traer los servicios')
    }
}

servicios()