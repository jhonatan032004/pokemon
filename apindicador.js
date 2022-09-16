let botton = document.querySelector('#btn-moneda')

botton.addEventListener('click', (e) => {
    let url = 'https://mindicador.cl/api'
    let daots = ""

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.bitcoin)
            let indi = document.getElementById('indicador');
            indi.innerHTML = `El valor del ${data.bitcoin.codigo}
    es de ${data.bitcoin.valor} en ${data.bitcoin.unidad_medida} 
    `
        })
        .catch(error => error)

})