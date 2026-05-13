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
                <img src="../assets/sistem_op.jpg" width="300" height="200">
                <p>Precio: <span class="precio">$${servicio.precio}</span></p>
                <button>Ver detalle</button>
                <div class="detalle-servicio"></div>
            `

            const boton = div.querySelector('button')
            const detalleDiv = div.querySelector('.detalle-servicio')

            boton.addEventListener('click', async () => {
                try {
                    const responseDetalle = await fetch(`https://tp3-grupo3.onrender.com/servicios/${servicio.id}`)
                    const detalle = await responseDetalle.json()

                    detalleDiv.innerHTML = `
                        <p><strong>Nombre:</strong> ${detalle.nombre}</p>
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