const apiUrl    = 'https://swapi.dev/api/'
const peopleUrl = 'people/:id/'
const opts = {crossDomain : true}

function obtenerPersonaje(id) {
  return new Promise ((resolve, reject) => {
    const url = `${apiUrl}${peopleUrl.replace(':id',id)}`
    $
      .get(url, opts, function(data) {
        resolve(data)
    })
      .fail(() => reject (id))
  })
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersonaje () {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map (id =>  obtenerPersonaje(id))
  try{
    var personajes = await Promise.all(promeas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonaje()
