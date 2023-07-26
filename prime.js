function isPrime(number) {
    // comprobamos si el dato pasado es un número
    if(isNaN(number)) {
        return number + " no es un número.";
    }

    // comprobamos si es un número entero
    if(number != Math.round(number)) {
        return number + " no es un número entero.";
    }

    // comprobamos si es mayor que 0
    if(number <= 0) {
        return " El número debe ser mayor que cero.";
    }    

    // procedemos a comprobar si es divisible
    // por algún número entre 2 y la mitad del valor proporcionado
    // no dividimos por 1 porque todos los números son divisibles por 1
    // no dividimos por el valor del dato porque todos los números son divisibles por si mismos
    // solo probamos hasta la mitad del valor del dato proporcionado
    // porque por encima de este valor no puede haber ningún número entero
    for (let index = 2; index <= (number/2); index++) {
        if(Number.isInteger(number/index)) {
            return number + " no es primo.";
        }
    }
    return number + " es primo.";
}


const data = undefined;
console.log(isPrime(data));