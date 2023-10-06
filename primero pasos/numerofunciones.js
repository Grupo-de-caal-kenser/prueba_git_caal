var num =50.65
var res = Number.isInteger(num)

console.log(res)

var rest = Number.parseInt(num)

console.log(rest)

//creacionm de objetos

var miObjeto = {
    //clave : valor
    nombre : "Kenser",
    edad : 25,
    impo : true,
    miFuncion : (a,b) => a - b,
    otroObjeto : {
        nom : "omar",
        sexo : "masculino"
    }
}

console.log(miObjeto.otroObjeto)