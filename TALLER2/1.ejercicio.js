/**
 * 1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, suma, resta, multiplicación, división e imprimir las operaciones. Validar la división entre 0(cero).
 */

'use script';

let num1 = parseFloat (prompt('Dame el primer valor:'));
let num2 = parseFloat (prompt('Dame el segundo valor:'));

function suma ( num1, num2){
    return num1 + num2;

}
let sumar = suma (num1, num2);
alert ("El resultado de su suma es:" +sumar);

function resta ( num1, num2){
    return num1 - num2;

}
let restar = resta (num1, num2);
alert ("El resultado de su resta es:" +restar);

function multiplicacion ( num1, num2){
    return num1*num2;
}
let multiplicar = multiplicacion (num1, num2);
alert ("El resultado de su multiplicacion es:" +multiplicar);

function division ( num1, num2){
    if(num2 > 0)
     return num1 / num2;
}
let dividir = division (num1, num2);
alert ("El resultado de su division es:" +dividir);
















