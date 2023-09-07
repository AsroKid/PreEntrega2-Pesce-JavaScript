
// Arrays

const JoyerosDisponibles = [
    {
        joyero: "Mateo Velázquez",
        especializacion: "Relojería",
        horario: "15.30",
    },
    {
        joyero: "Valentina Herrera",
        especializacion: "Collares y Cadenas",
        horario: "12.45",

    },
    {
        joyero: "Sebastián Mendoza",
        especializacion: "Pulseras y Brazaletes",
        horario: "09.15",
    },
    {
        joyero: "Isabela Vargas",
        especializacion: "Anillos de Compromiso",
        horario: "19.00",
    },
    {
        joyero: "Alejandro Sánchez",
        especializacion: "Joyería Personalizada",
        horario: "11.30",
    },
    {
        joyero: "Camila Ríos",
        especializacion: "Pendientes y Aretes",
        horario: "17.00",
    },

]


// Variables

let verdad = true
let arrJoyeros = []

//Lets del inicio

let nombre = prompt("¡Bienvenido a Asro Jewerls, por favor completa los siguientes datos para ingresar a nuestro sitio: \n Tu nombre:")
let apellido = prompt("Tu apellido:")
let edad = prompt("Tu edad:")
let documento = prompt("Tu numero de documento (puede ser DNI argentino o pasaporte extranjero):")

// Constructores

class NuevoJoyero {
    constructor(Joyero, especializacion, horario) {
        this.Joyero = Joyero
        this.especializacion = especializacion
        this.horario = horario
    }
}

// Pusheo los joyeros ya creados

function puseharJoyerosDisponibles() {
    for (const element of JoyerosDisponibles) {
        arrJoyeros.push(new NuevoJoyero(element.Joyero, element.especializacion, element.horario))
    }
}
puseharJoyerosDisponibles()


// Ingreso al sitio

// Registro del inicio

questInicio()
function questInicio() {
    while (verdad) {
        if (nombre === "" || apellido === "" || edad === "" || documento === "") {
            alert("Hay uno de los valores incompleto, por favor vuelva a ingresarlo:")
            nombre = prompt("¡Bienvenido a Asro Jewerls, por favor completa los siguientes datos para ingresar a nuestro sitio: \n Tu nombre:")
            apellido = prompt("Tu apellido:")
            edad = prompt("Tu edad:")
            documento = prompt("Necesitamos comprobar tu mayoria de edad, por favor, escribe tu numero de documento (puede ser DNI argentino o pasaporte extranjero):")
        } else {
            inicioPagina()
        }
    }
}



// Funciones

// console.log(arrJoyeros)

function inicioPagina() {
    while (verdad) {
        let bienvenidaWeb = prompt(`¡Hola, ${nombre}! \n A continuacíon, dispones de acciones que te ayudaran a navegar el sitio web, por favor eliga alguna: \n 1) Mostrar tu perfil ingresado:  \n 2) Mostrar joyeros disponibles: \n 3) Buscar especialidades existentes: \n 4) Consultar métodos de pago de turno: \n 11) Salir del sistema:  \n ---------------------------------------------- \n SOLO PARA ESPECIALISTAS \n 6) Soy nuevo empleado y quiero registrarme en el sistema`)
        switch (bienvenidaWeb) {
            case "1":
                verPerfil()
                break
            case "2":
                verJoyerosDisponibles()
                break
            case "3":
                buscadorEspecialidades()
                break
            case "4":
                consultarPagoDeTurno()
                break
            case "6":
                registrarseComoEspecialista()
                break
            case "11":
                verdad = false
                break
        }
    }
}

// Funciones

function registrarseComoEspecialista() {
    alert("¡Bienvenido! Estás ingresando a la sección de registro para el personal. \n Por favor LEA ATENTAMENTE LOS PASOS A SEGUIR para evitar errores:")
    let Joyero = prompt("Introducí tu APELLIDO primero, luego tu NOMBRE como se indica debajo en el ejemplo: \n Ej: Pérez, Matías")
    let especializacion = prompt("Indicá la especializacion a la que te dediques, comenzando con MAYUSCULAS y SIN TILDE: ")
    let horario = prompt("Indica un HORARIO ESPECÍFICO UNICO en el que puedas atender, de manera tal: hh.mm \n Ej: 09.30")
    while (verdad) {
        if (joyero == "" || especializacion == "" || horario == "") {
            alert("Se ha omitido ingresar un valor en especial, por favor revise y vuelva a intentar")
            joyero = prompt("Introducí tu APELLIDO primero, luego tu NOMBRE como se indica debajo en el ejemplo: \n Ejemplo: Rodriguez, Juan")
            especializacion = prompt("Indicá la especializacion a la que te dediques, comenzando con MAYUSCULAS y SIN TILDE: ")
            horario = prompt("Indica un HORARIO ESPECÍFICO UNICO en el que puedas atender futuros contactos, de manera tal: hh.mm \n Ej: 09.30")
        } else {
            let nuevoJoyeroLet = new NuevoJoyero(joyero, especializacion, horario)
            arrJoyeros.push(NuevoJoyeroLet)
            console.log(arrJoyeros)
            inicioPagina()
        }
    }
}



function verJoyerosDisponibles() {
    buscadorJoyerosDisponibles(arrJoyeros, alert)
    alert("No hay mas joyeros disponibles en este momento")
    inicioPagina()
}

function buscadorJoyerosDisponibles(arrJoyeros, fn) {
    for (const el of arrJoyeros) {
        fn(el.joyero + " // Area de " + el.especializacion + " // Con horario " + el.horario + "hs.")
    }
}

function verPerfil() {
    alert(`Tu perfil es: \n Nombre: ${nombre} \n Apellido: ${apellido} \n Edad: ${edad} \n Tu documento/pasaporte extranjero: ${documento}`)
    inicioPagina()
}

function buscadorEspecialidades() {
    let espABuscar = prompt("Por favor, ingrese la especializacion que desea buscar, se requiere que la primera letra sea en MAYUSCULAS y no debe incluir TILDE en la palabra:")
    let espBuscando = arrJoyeros.find((espeFind) => {
        return espeFind.especializacion === espABuscar
    })
    if (espBuscando) {
        alert(`La especializacion que buscaste ----> ${espABuscar + " "}; EXISTE en nuestra base de datos, es atendida por ${espBuscando.joyero} a las ${espBuscando.horario}hs.`)
    } else {
        alert(`La especializacion que buscaste ----> ${espABuscar + " "}; NO SE HA ENCONTRADO ni esta disponible en nuestra base de datos.`)
    }
}


function consultarPagoDeTurno() {
    while (verdad) {
        let valorMinimoLegal = 4000
        let valorAgregadoPago = 0
        let valorTotSinInt = 0
        let interes = 0
        let menuDePagoSwitch = prompt("Se implica que el monto minimo de consulta es de -pesos- $4000; se podran aplicar distintos valores y formas de pago; dependiendo del medio de pago escogido: \n A continuacion se indican precios mas metodos de pago: \n 1) Banco Santander \n 2) Banco Galicia \n 3) Banco BBVA \n 4) Banco Itaú \n 5) Banco Macro \n 6) Banco HSBC \n 11) Volver al menu principal \n \n *Adecuados segun los Términos especificos® de cada uno, de acuerdo a sus bases y condiciones™")
        switch (menuDePagoSwitch) {
            case "1":
                valorAgregadoPago = 3850
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 18
                alert(`El valor total del turno con Banco Santander es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "2":
                valorAgregadoPago = 1250
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 12
                alert(`El valor total del turno con Banco Galicia es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "3":
                valorAgregadoPago = 1500
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 14
                alert(`El valor total del turno con Banco BBVA es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "4":
                valorAgregadoPago = 975
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 20
                alert(`El valor total del turno con Banco Itaú es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "5":
                valorAgregadoPago = 1100
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 24
                alert(`El valor total del turno con Banco Macro es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "6":
                valorAgregadoPago = 2250
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 12
                alert(`El valor total del turno con Banco HSBC es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break

            case "11":
                inicioPagina()
                break
        }
    }

}

// Intento de calculador de cuotas en base a lo de arriba, no logre hacerla.

// function cuotasPagoDeTurno() {
//     let interes = 0
//     let valorFinalConsCuotas = 0
//     let cuotas = prompt("A continuación, elegí la cantidad de cuotas, el sistema te devolverá el interés. \n 1) 2 cuotas c/interés \n 2) 4 cuotas c/interés \n 2) 9 cuotas c/interés \n 2) 12 cuotas c/interés")
//     switch (cuotas) {
//         case "1":
//             valorFinalConsCuotas = valorFinalConsulta * 0.04 + valorFinalConsulta
//             interes = valorFinalConsCuotas / 2
//             alert = (`El valor total del pago del turno es de: \n $${valorFinalConsCuotas} en 2 cuotas con valor: ${interes}.`)
//             break
//         case "2":
//             valorFinalConsCuotas = valorFinalConsulta * 0.08 + valorFinalConsulta
//             interes = valorFinalConsCuotas / 4
//             alert = (`El valor total del pago del turno es de: \n $${valorFinalConsCuotas} en 4 cuotas con valor: ${interes}.`)
//             break
//         case "3":
//             valorFinalConsCuotas = valorFinalConsulta * 0.12 + valorFinalConsulta
//             interes = valorFinalConsCuotas / 8
//             alert = (`El valor total del pago del turno es de: \n $${valorFinalConsCuotas} en 8 cuotas con valor: ${interes}.`)
//             break
//         case "4":
//             valorFinalConsCuotas = valorFinalConsulta * 0.16 + valorFinalConsulta
//             interes = valorFinalConsCuotas / 12
//             alert = (`El valor total del pago del turno es de: \n $${valorFinalConsCuotas} en 12 cuotas con valor: ${interes}.`)
//             break
//     }
// }


inicioPagina()