
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre   = nombre
    this.apellido = apellido
    this.altura   = altura
  }
  saludar(fn) {
    var {nombre , apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    const alto = 1.80
    if (this.altura >= alto) {
    console.log('Soy Alto')
    } else {
    console.log('No soy Alto')
    }
  }
}



class Desarrollador extends Persona {
  constructor (nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    var {nombre , apellido} = this
    console.log(`hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo (nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarrollador/a`)
  }
}

var daniel   = new Persona('Daniel', 'Bernal', 1.80)
var santiago = new Persona('Santiago', 'Garcia', 1.78)
var piedad   = new Desarrollador('Piedad', 'Henao', 1.70)

daniel.saludar()
santiago.saludar(responderSaludo)
piedad.saludar(responderSaludo)
