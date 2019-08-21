
const url = 'https://pokeapi.co/api/v2/pokemon/1/'
fetch(url)
.then (response => response.json())
.then (data => {

    let element = document.getElementById('elem')
    element.innerHTML = 
    ` <p>${data.order}</p>
     <p>${data.name}</p>
     <img src= '${data.sprites.front_default}'/> `


    console.log(data)

})
.catch(err=>console.log(err))

