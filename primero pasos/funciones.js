function saludo(){
    console.log("hola para mi")
}

function miSuma(a,b){
    let resultado = a + b
    console.log(resultado)

}
saludo()
miSuma(4,5)


var mioperacion = function (a,b,c){
    return a + b - c
}

console.log(mioperacion(5,2,3))


//funciones de flecha 

var accesso = false

var access = function(k){
    return k
}

access(accesso) == true
? console.log("permitido")
: console.log("denegado")

var acc = true

var acce = z => z

acce(acc) == true
? console.log("permitido")
: console.log("denegado")

//otra forma

a = true
var b = (a,b) => console.log(`nombre ${b} accesso ${a}`)
b(a, "kenser" )

//

var ccesso = true
var c = () => {
    console.log("usuario en ejecucion")
    return true
}
c(ccesso) == true
? console.log("permitido")
: console.log("denegado")