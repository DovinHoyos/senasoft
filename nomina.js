
class Employee {
 
    constructor(id, name, cargo, tarifaHora, numHorasTrab){
        this.id = id;
        this.name = name;
        this.cargo = cargo;
        this.tarifaHora = tarifaHora;
        this. numHorasTrab = numHorasTrab;
    }

    getId() {
        return this.id
    }
    setId(id) {
        this.id = id;
    }
    
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name;
    }

    getCargo() {
        return this.cargo;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
  
    getTarifaHora() {
        return this.tarifaHora
    }
    setTarifaHora(tarifaHora) {
        this.tarifaHora = tarifaHora;
    }

    getNumHorasTrab() {
        return this.numHorasTrab
    }
    setNumHorasTrab(numHorasTrab) {
        this.numHorasTrab = numHorasTrab;
    }

}
let employees = [];
const showEmployeeForm = (numRegisters)=>{
    for(let i = 0; i < numRegisters; i++){
        registerEmployee();
    }
}

const registerEmployee = () => {
    let emp = new Employee();
    emp.setName(prompt('nombre del empleado: '));
    emp.setId(prompt('id del empleado: '));
    emp.setCargo(prompt('cargo del empleado: ')) ;
    emp.setTarifaHora(parseInt(prompt('tarifa por hora: ')))  ;
    emp.setNumHorasTrab(parseInt(prompt('numero de horas trabajadas: ')));

    employees.push(emp);
}
const calcularSalarioMensual = (horas, tarifa) => {
    let salario = horas*tarifa;
    return salario;
}

const reporteEmpleado = () => {
    for(i = 0; i < employees.length; i++){
        e = employees[i];
        horas = e.getNumHorasTrab();
        tarifa = e.getTarifaHora();
        alert('...Reporte del empleado...' + '\nId:' + e.getId() + '\nNombre del empleado: ' + e.getName() +
                '\nCargo: ' + e.getCargo() + '\nHoras trabajadas: ' + horas +
            '\nTarifa por hora: ' + tarifa + '\nSalario mensual: ' + calcularSalarioMensual(horas, tarifa));
    }
}


let numEmp = parseInt(prompt('ingrese numero de empleados: '));
showEmployeeForm(numEmp);
reporteEmpleado();





