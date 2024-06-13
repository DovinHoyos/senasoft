/*Ejercicio 3
Un vendedor ha realizado N ventas y desea saber:
• ¿Cuántas fueron de $1 a $10.000?
• ¿Cuántas fueron por más de $10.000 pero por menos de $20.000?
• ¿Cuánto fue el monto de las ventas de cada una y el monto global?
• Realice un algoritmo para determinar los totales.
Se requiere analizar. crear el algoritmo y representarlo. Se debe proporcionar una captura de su
respectiva ejecución.*/

const readline = require('readline');
var numVentas = 0;
let ventas=0 ;
let contador = 0;
let conteoVentas = 0;
let totalventas1 = 0;
let totalventas2 = 0;
const r = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
const ingresarVentas=()=> {
    
    r.question("ingrese el numero de ventas", (input) => {
        numVentas = parseInt(input);
        llenarArreglo();
       
    });
    
}
const llenarArreglo=()=> {
    if (contador < numVentas) {
        r.question("Ingrese valor de la venta  ", (valorventa) => {
            ventas = parseInt(valorventa);
            
            if ((ventas >= 1) && (ventas <= 10000)) {
                conteoVentas++;
                totalventas1 += ventas;
            }
            else if ((ventas > 10000) && (ventas < 20000)) {
                conteoVentas++;
                totalventas2 += ventas;
            }
            contador++   
            llenarArreglo();
        });  
    }
     else  {
        console.log("total ventas 1:" + totalventas1);
        console.log("total ventas 2:" + totalventas2);
        console.log("total de ventas")
        r.close();
    }  
}
ingresarVentas();
