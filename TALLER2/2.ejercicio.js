/**
 * 2. Calcular el sueldo a pagar de un trabajador dado que se debe ingresar la cantidad de horas trabajadas y el valor de la hora en pesos.
 */
'use script';

let sueldo = parseFloat (prompt('Dame la cantidad de horas trabajadas:'));
let horasTrabajadas = parseFloat (prompt('Dame el valor de la hora en pesos:'));

function multiplicacion ( sueldo, horasTrabajadas){
    return sueldo * horasTrabajadas;
}
let sueldoPagar = multiplicacion (sueldo, horasTrabajadas);
alert ("El total a pagar es de:"+sueldoPagar);

