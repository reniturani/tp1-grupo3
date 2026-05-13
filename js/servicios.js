const cardContainer = document.querySelector('#card-container')

async function servicios () {
    try {
        const response = await fetch('https://tp3-grupo3.onrender.com/servicios/')
        const data = await response.json()
        console.log(data)

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
            const response = await fetch(`https://tp3-grupo3.onrender.com/servicios/`)
            const data = await response.json()

            detalleDiv.innerHTML = `
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Descripción:</strong> ${data.desc}</p>
                <p><strong>Precio:</strong> $${data.precio}</p>
            `
        } catch {
            console.log('Error al obtener detalle')
        }
    })

    cardContainer.append(div)
})

    } catch {
        console.log('Error al obtener servicios')
    }
}
servicios()
