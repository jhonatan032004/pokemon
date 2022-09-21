
let btnCarga = document.getElementById('cbo-carga')
min = 1
max = 500
btnCarga.addEventListener('click', (e)=>{
    let url = "https://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random()*(max-min+1)+min)
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);

        let tr = document.getElementById('poke');
        
        tr.innerHTML  += `<td> <img src='${data.sprites.front_shiny}'><br> Nombre: ${data.name} </td>`
 
        
    })
    .catch(err => console.log(err))
})