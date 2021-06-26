/*
var daniel = {
  nombre     : 'daniel',
  apellido   : 'bernal',
  edad       : 26,
  ingeniero  : true,
  artista    : false,
  dj         : false,
  deportista : true,
  peso       : 72,
  altura     : 1.80,
  cantidadDeLibros: 50,
}

var santiago = {
  nombre   : 'santiago',
  apellido : 'garcia',
  edad     : 22,
  altura   : 1.78,
  cantidadDeLibros: 130,
}

var miguel = {
  nombre   : 'miguel angel',
  apellido : 'jaramillo',
  edad     : 1,
  altura   : 0.40,
  cantidadDeLibros: 1,
}

// Clase Objetos y Desestructurar

function imprimirNombreEnMayuscula(persona) {
  var { nombre }   = persona
  var { apellido } = persona
  var { edad }     = persona

  console.log ('Hola me llamo ' + nombre.toUpperCase() + ' ' + apellido.toUpperCase() + ' y tengo ' + edad + ' ' + 'años' )
}

imprimirNombreEnMayuscula(daniel)
imprimirNombreEnMayuscula(santiago)

// Parametros como referencia

function cumpleaños (persona) {
  return {
    ... persona,
    edad : persona.edad + 1
  }
}

// Comparaciones

var  x = 4, y = "4"

var otrapersona = {
  nombre : 'daniel'
}

var otrapersona2 = santiago.nombre

// Condicionales

function imprimirProfesiones (persona) {
  console.log(`${persona.nombre.toUpperCase()} es:`)

  if (persona.ingeniero === true) {
    console.log('ingeniero')
  }

  if (persona.artista === true) {
    console.log('artista')
  } else {
    console.log('no es un artista')
  }

  if (persona.dj === true) {
    console.log('dj')
  } else {
    console.log('no es un dj')
  }

  if (persona.deportista === true) {
    console.log('deportista')
  }
}

imprimirProfesiones(daniel)


// Estructuras de Control if

const MayoriaDeEdad = 18

function esMayorDeEdad (persona){
  return persona.edad >= MayoriaDeEdad
}

function imprimirMayorDeEdad (persona) {
  console.log(`${persona.nombre} tiene: ${persona.edad}`)

  if (esMayorDeEdad(persona)) {
    console.log('Eres mayor de edad')
  } else {
    console.log('Eres menor de edad')
  }
}

imprimirMayorDeEdad(daniel)

// Arrow Funciones

// const esMenorDeEdad = function (persona) {
//   return persona.edad < MayoriaDeEdad
// }
// Lo anterior es equivalente a lo siguiente
// siempre que este esta => es una funcion

const esMenorDeEdad = ({edad}) => {
  return edad < MayoriaDeEdad
}

function imprimirMenorDeEdad (persona) {
    console.log(`${persona.nombre} tiene: ${persona.edad}`)

  if (esMenorDeEdad(persona)) {
    console.log('Eres menor de edad')
  } else {
    console.log('Eres menor de edad')
  }
}

imprimirMenorDeEdad(miguel)

function permitirAcceso(persona){
  if (!esMayorDeEdad(persona)) {
    console.log('Acceso Denegado')
  }
}

permitirAcceso(miguel)

// Estructura de control for

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso}kg`)

const masa = 0.3
const diasDelAño = 365
// funcion arrow
const engordar  = persona => persona.peso += masa
const adelgazar = persona => persona.peso -= masa

for (var k = 1 ; k <= diasDelAño; k++) {
  var random = Math.random()
  if (random < 0.25){
    // amunta de peso
    engordar (daniel)
  } else if (random < 0.5) {
    // disminuir peso
    adelgazar (daniel)
  }

}

console.log(`Al final del año ${daniel.nombre} pesa ${daniel.peso.toFixed(1)}kg`)

// estructura de Control while

const meta = daniel.peso - 3
var   dias = 0
const comeMucho   = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

while (daniel.peso > meta) {

  if (comeMucho()) {
    // aumentar de peso
    engordar(daniel)
  }
  if (haceDeporte()) {
    // rebaja de peso
    adelgazar(daniel)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${daniel.nombre} adelgazo 3kg`)

// estructura de control switch

var signo = prompt('Cual es tu signo')

switch (signo) {

  case 'aries':
    console.log('Sepa que debe abandonar los problemas que no le afectan directamente en su vida profesional y personal. Procure tomar todos sus deseos de un modo constructivo.')
  break
  case 'tauro':
    console.log('Mientras más intente que las cosas sucedan tal como desea, más obstáculos encontrará en su camino para concretarlas. Deje que todo fluya solo.')
  break
  case 'geminis':
    console.log('Será una fase óptima para reformar su vida personal. Recuerde que deberá controlar los repentinos cambios de personalidad que afectan a sus relaciones.')
  break
  case 'cancer':
    console.log('Momento oportuno para que se obligue a buscar soluciones reales a los problemas que le surgen día a día. Sepa que no ganará nada con escaparse de los mismos.')
  break
  case 'leo':
    console.log('Esté preparado, ya que resurgirá la fuerza en su personalidad y se sentirá más vital. Así, podrá eliminar los sentimientos negativos que ahondan en su interior.')
  break
  case 'virgo':
    console.log('Deberá asumir mejor las responsabilidades y determinarse nuevas tácticas dentro del ámbito profesional. Esto lo ayudará a alcanzar las metas rápidamente.')
  break
  case 'libra':
    console.log('Sepa que debe tomar ya mismo esa decisión que viene postergando hace días. Cuenta con todo lo que necesita para cumplir los sueños de su vida.')
  break
  case 'escorpio':
    console.log('Aunque le cueste demasiado, intente sostener la autoestima alta, no claudique. Esto lo ayudará a obtener sus logros tan deseados y cumplir con sus propósitos.')
  break
  case 'sagitario':
    console.log('Haga lo posible para acrecentar los vínculos familiares. Sepa que una simple llamada por teléfono con sus parientes lo mantendrá cerca de ellos.')
  break
  case 'capricornio':
    console.log('Propóngase efectuar nuevas tareas, de esta forma se le abrirá la mente a lo desconocido y podrá obtener como resultado experiencias muy positivas.')
  break
  case 'acuario':
    console.log('Prepárese, ya que sus conocimientos se convertirán en la base para la realización de esos nuevos proyectos. Procure pensar bien antes de realizar algún movimiento.')
  break
  case 'piscis':
    console.log('Durante la tarde, su espíritu conciliador le permitirá resolver un problema que tiene hace tiempo con esas personas de su entorno inmediato.')
  break
  default :
    console.log('No es un signo zodiacal valido')
  break
}
console.log(signo)

// Array

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [daniel, santiago, miguel, sacha, alan, martin, vicky, paula]

for (var k = 0; k < personas.length; k++) {
  var persona = personas[k]
  console.log(`${persona.nombre} mide ${persona.altura}m`)
}

// filtar

const esAlta = ({altura}) => altura >= 1.80
const esBaja = ({altura}) => altura <= 1.79

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)

// Trasfromar un array con map

// retornar un objeto en un funcion arrow
const pasarAlturaACms = persona => ({
    ...persona,
    altura : persona.altura * 100
  })

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)

//  Reducir un Array a un valor

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDelLibros = personas.reduce(reducer,0)

console.log(`En total tienen ${totalDelLibros} libros`)
*/

      const nombre = persona.nombre
      const apellido = persona.apellido
      const edad = persona.edad
 // 2
      //const { nombre, apellido, edad } = persona
