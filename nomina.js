
class Employee {
 
    constructor(id, name, cargo, tarifaHora, numHorasTrab){
        this.id = id;
        this.name = name;
        this.cargo = cargo;
        this.tarifaHora = tarifaHora;
        this. numHorasTrab = numHorasTrab;
    }

    getiId() {
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
        return this.cargo
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
    return (horas*tarifa);
}

const reporteEmpleado = () => {
    employees.forEach(e =>{
        alert(`Id: ${e.getiId()}\nNombre del trabajador: ${e.getName()}\nCargo: ${e.cargo()}\n
                Horas trabajadas: ${e.getNumHorasTrab()}\nTarifa por hora: ${e.getTarifaHora()}\n
                Salario mensual: ${e.getNumHorasTrab()*e.getTarifaHora()}`);
    })
}


let numEmp = parseInt(prompt('ingrese numero de empleados: '));
showEmployeeForm(numEmp);

reporteEmpleado();

