/*Implementar un algoritmo que permita realizar operaciones sobre matrices de M x N. El programa
debe permitir al usuario la selección de alguna de las siguientes operaciones: sumar, restar,
multiplicas o trasponer dos matrices. Se requiere analizar y crear el algoritmo y representarlo. Se
debe proporcionar una captura de pantalla del pseudocódigo con su respectiva ejecución.*/

let operacion=1;
operacion=prompt("Escriba que operacion quieres realizar: 1 = suma, 2 = resta y 3 = multiplicacion ")

let matrizM = [
    [3,2], 
    [1,2]
]
let matrizN = [
    [1,4], 
    [5,6]
]

if(operacion==1){ 
    let suma = 0
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            suma = matrizM[i][j] + matrizN[i][j];
            alert(suma)
        }
    }
}

if(operacion ==2){
    let resta = 0
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            resta = matrizM[i][j] - matrizN[i][j]
            alert(resta)
        }
    }
}

if(operacion ==3){
    let mulplicacion = 0
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            mulplicacion = matrizM[i][j] * matrizN[i][j]
            alert(mulplicacion)
        }
    }
}