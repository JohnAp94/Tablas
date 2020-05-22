var user = prompt('Hola, Ingresa tu nombre')

var tablaSelecUser = parseInt(prompt('Escribe el número de la tabla que quieres practicar:'))
var numAleatorio
var respuestaUsuario
var verificador = true
var resultado
var puntos = 0

while (verificador === true) {
    numAleatorio = Math.floor(Math.random()*10+1)
    resultado = tablaSelecUser * numAleatorio
    respuestaUsuario = parseInt(prompt(`Cuanto es ${tablaSelecUser} x ${numAleatorio}`))
    if (respuestaUsuario === resultado) {
        puntos += 1
        alert(`Correcto! ${user}, tienes ${puntos} puntos, sigue adelante`)
    }
    else {
        alert(`Incorrecto ${user}, perdiste ${puntos}, debes seguir practicando`)
        verificador = false
    }
}
