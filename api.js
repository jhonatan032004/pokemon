let url = 'https://api.covidtracking.com/v1/us/daily.json'
let botonc = document.getElementById('btncovid')

botonc.addEventListener('click', (e) =>{
fetch(url)
.then(response => response.json())
.then(data =>{

    let part = document.getElementById('apicovid')
    part.innerHTML = `info: ${data.states}`
    console.log(data)
})
.catch(err => err)
})