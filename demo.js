//variables

var numero1 = 123;

var nombre1 = "Farid";

var Var = 24;

console.log(nombre1);

var usuario;

console.log(usuario)


//Operadores

var resultado = 2 + 7;

console.log(resultado);


var comparacion = 3 >= 4;

console.log(comparacion)



//Logicos

var resultadologico = (100 > 200)&&(3 >= 3);

console.log(resultadologico)

//métodos

var nombre = "Exequiel";

console.log("El nombre tiene:", nombre.length, "letras") //cuenta los carácteres del string

console.log("____________________")

//Funciones

function sumar (a, b) {
    var suma = a + b;
    return suma;
}

console.log (sumar (8, 9));


//condicionales

var edad = 24;

if (edad > 18) {
    console.log ("Soy mayor de edad")
}   else {
        console.log ("Soy menor de edad")
    }

console.log("___________________________________")

function dominioDelPais(dominio){
    if (dominio==="co"){
    console.log("el pais es colombia")
}   else if (dominio==="Ar") {
    console.log("el pais es Argentina")
}   else {
    console.log("el pais es Brasil")
}
}
console.log(dominioDelPais("Uy"));
