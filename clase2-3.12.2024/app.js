// Declaracion de variables (let y const)
// Funciones de flecha
// Template literals
// Desestructuracion
// Parametros por defecto
// Operador Spread y Rest
// Promesas
// Clases
// Modulos (import/export)


/***************VARIABLES****************/
//let nombre = "Agustin" //el nombre a mostrar es agustin
//console.log(nombre) //orden de mostrar el nombre que es agustin

function mostrarContrasenia() { //funcion que debe cumplir la variable let
    let clave = "hola1234" // info que debe mostrarse cuando se pide la funcion de mostrar la contraseña
    //console.log(clave)
}

mostrarContrasenia() //orden para que se muestre la contraseña

//let edad; //let se usa tambien para declarar valores como la edad

//edad = 19

//console.log(edad) // console.log activa lo que hay que mostrar entre parentesis


const apellido = "De Lucia";
//console.log(apellido)



/***************FUNCIONES FLECHAS****************/

function saludar(nombre) { //LE ENSEÑO A LA PAGINA QUE TIENE QUE HACER CON ESTE CODIGO. siempre el nombre de la funcion es la actividad que va a realizar esa funcion
    console.log("Hola " + nombre)// CON ESTE CODIGO EJECUTA LA ACCION QUE LE PEDIMOS ARRIBA
} 

saludar("Agustin")

//return implicito
const saludar2 = (nombre) => "Hola " + nombre

const saludoRealizado2 = saludar2("Maria")
console.log(saludoRealizado2)


/***************TEMPLATE LITERALS****************/
//forma de escribir oraciones con datos pre cargados
const raza = "salchicha"
const color = "marron"
const peso = "8,5 kilos"

const oracion = "Mi perro es un " + raza + " de color " + color + " y pesa " + peso
console.log(oracion) 


/***************DESESTRUCTURACION****************/

const usuario = {
    nombre: "Agustin",
    edad: 33,
    hobbie: "ser gamer"
}

// HOLA SOY AGUSTIN Y TENGO 33 AÑOS Y MI HOBBIE ES SER GAMER (oracion que se debe formar) ``

console.log(`Hola soy ${usuario.nombre} y tengo ${usuario.edad} años. `)

//otra forma de escribir lo de arriba

const { nombre, edad, hobbie } = usuario

console.log(nombre, "<- aca el nombre")
console.log(edad, "<- aca la edad")

console.log( `Hola, soy ${nombre}, tengo ${edad} y mi pasatiempo es ${hobbie}. `)


/***************PARAMETROS POR DEFECTO****************/

const saludar3 = (nombre = "Inivitado") => `Hola ${nombre}` //ejecuto la funcion saludar y al no haber un nombre especificado, se da la respuesta por defecto que seria invitado

const saludoRealizado3 = saludar3() //no se puso un nombre especifico asique la respuesta sera por defecto Invitado
console.log(saludoRealizado3)




//OTRO EJEMPLO: cambiar foto de perfil
const imagen = document.getElementById("imagen")

const imgPorDefecto = "https://www.researchgate.net/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png"

const cambiarFotoPerfil = (foto = imgPorDefecto) => {
    imagen.src = foto
}

cambiarFotoPerfil("https://st3.depositphotos.com/1007566/12491/v/950/depositphotos_124910596-stock-illustration-cartoon-male-standing-human-resources.jpg")


/***************OPERADOR SPREAD****************/
//herramienta para usar en los array (array es una lista de elementos ordenada)
//ej: sirve para ir agregando nuevos objetos a un carrito de compras

const Productos = ["lavandina", "pan", "queso", "salchichas"]

const nuevosProductos = [...Productos, "carne", "fruta"] //con los tres puntitos permite agregar los nuevos productos a la lista primaria.

console.log(nuevosProductos)



//otro ejemplo de lo mismo

const frutas = ["manzanas", " pera", "narnaja"]

const verduras = ["papa", "morron", "apio", "tomate"]

const alimentos = [...frutas, ...verduras]

console.log(alimentos)



/***************MODULOS (IMPORT/EXPORT)****************/
//son elementos que se pueden exportar y usarlos en entras paginas citandolos
const gritar = (oracion) => `¡¡${oracion}!!`

console.log(gritar("tengo hambre"))

export { gritar }