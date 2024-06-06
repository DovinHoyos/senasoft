class Employee {
    constructor(id, name, tarifaHora, numHorasTrab){
        this.id = id;
        this.name = name;
        this.tarifaHora = tarifaHora;
        this.numHorasTrab = numHorasTrab;
    }

    setId (id){
        this.id = id;
    }
    getID(){
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setTarifaHora(tarifaHora){
        this.tarifaHora = tarifaHora;
    }
    getTarifaHora(){
        return this.tarifaHora;
    }
    setNumHorasTrab(numHorasTrab){
        this.numHorasTrab = numHorasTrab;
    }
    getNumHorasTrab(){
        return this.numHorasTrab;
    }
}

