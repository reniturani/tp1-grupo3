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
                <h2>💾Instalación de software, hardware y SO</h2>
                <img src = "../assets/sistem_op.jpg" width="300" height="200">
                <p>Precio: <span class="precio">${servicio.precio}</span></p>
                <h3>${servicio.desc}</h3>
            `

            cardContainer.append(div)
        })
    }catch {
        console.log('Error, no se pudieron traer los datos de los servicios.')
    }


}

servicios()