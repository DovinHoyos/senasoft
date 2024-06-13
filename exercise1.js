/*Ejercicio 1
En un hospital se pide realizar un algoritmo sobre la altura de un paciente. Que si la altura es
menor o igual a 150 cm, envíe el mensaje: “Persona de Altura baja”; si la altura está entre 151 y
170 cm, escriba: “Persona de Altura Media” y si la altura es mayor a 171 cm escriba: “Persona de
Altura Alta”. Se debe proporcionar una captura de pantalla resultado de la ejecución*/ 


if(alturaUsuario<=150){
    console.log('persona de altura baja')
}
if(alturaUsuario>=151 && alturaUsuario<170)console.log('persona de altura media')
if(alturaUsuario>=170)console.log('persona de altura alta')

var SolicitarAlturaUsuario=()=>{
    var alturaUsuario = 142
    CalcularPersonaBaja(alturaUsuario)
}

var CalcularPersonaBaja = (alturaUsuario) => {
    
    if(alturaUsuario < 150){
        console.log('persona de altura baja');
    }
}



