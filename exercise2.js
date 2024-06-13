/*Ejercicio 2
Una institución financiera ha solicitado a la dirección de tecnología desarrollar un algoritmo para
determinar la cantidad de dinero recibida por un trabajador por las horas semanales trabajadas en
una empresa. Sabiendo que: cuando las horas de trabajo exceden de 40 el resto se consideran
horas extras y se pagan el doble de una hora normal, cuando no exceden de 8; si las horas extras
exceden de 8, se pagan las primeras 8 el doble de lo que se paga una hora normal y el resto al
triple. Del trabajador se proporcionan los siguientes datos: nombres, número de horas trabajadas
en la semana y valor recibido por una hora normal de trabajo. crear el algoritmo y representarlo.
Se debe proporcionar una captura de pantalla de su respectiva ejecución. */

var nombre = "Carlos"
var horasTrabajadasSemanales = 42
var valorHoraNormal = 8000

const calcularHorasNormales = () => {
    resultado = horasTrabajadasSemanales*valorHoraNormal
    console.log(resultado)
}
const calcularHorasExtras = () => {
    if(horasTrabajadasSemanales>40 && horasTrabajadasSemanales<=48){
        valorHoraDoble=valorHoraNormal*2
        resultado = horasTrabajadasSemanales*valorHoraDoble
        console.log(resultado) 
    }else if(horasTrabajadasSemanales>48){
        valorHoraTriple=valorHoraNormal*3
        resultado=horasTrabajadasSemanales*valorHoraTriple
    }else{calcularHorasNormales()}
}

calcularHorasNormales()
calcularHorasExtras()





