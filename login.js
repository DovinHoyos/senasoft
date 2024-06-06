class User {
    constructor(name, lastname, email, phone, username, password){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }
    setName(name){
        this.name = name;
    }
    setLastname(lastname){
        this.lastname = lastname;
    }
    setEmail(email){
        this.email = email;
    }
    setPhone(phone){
        this.phone = phone;
    }
    setUsername(username){
        this.username = username;
    }
    setPassword(pass){
        this.password = pass;
    }
    getUsername(){
        return this.username;
    }
    
    getPassword(){
        return this.password;
    }
    toString(){
        return this.username + " " + this.password;
    }

}

let users = [];
const showRegisterForm = (numRegisters) =>{
    for(let i = 0; i < numRegisters; i++){
        register();
    }

}
const register = () =>{
    let user = new User();
    user.setName(prompt('Ingrese su nombre: '));
    user.setLastname(prompt('Ingrese su apellido: '));
    user.setEmail(prompt('Ingrese su email: '));
    user.setPhone(prompt('Ingrese su telefono: '));
    user.setUsername(prompt('Ingrese su usuario: '));
    let pass = prompt('Ingrese su contraseña: ');
    let passValid = prompt('Ingrese nuevamente su contraseña: ');

    if (passValid === pass){
        alert('has sido registrado');
        user.setPassword(passValid);
        users.push(user);
    }else{
        alert('las contraseñas no coinciden');
        register();
    }
}
const login =()=>{
    let username = prompt('Ingrese nombre de usuario:');
    let password = prompt('Ingrese contraseña:');

    for(i=0;i<users.length;i++){
        let currentUser = users[i]
        if (username !== currentUser.getUsername()){
            continue;
        }
        if(password === currentUser.getPassword()){
            alert('bienvenido')
            return
        }
        alert('contraseña incorrecta');
        login();

    }
    alert('usuario no existe')
    
}
let numRegisters = parseInt(prompt('Ingrese numero de registros: '));
showRegisterForm(numRegisters);
users.forEach(u =>{
    alert(u.toString());
})
login();