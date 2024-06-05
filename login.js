class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
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

const register = () =>{
    let user = new User();
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
        if (username !== users[i].getUsername()){
            alert('usuario no existe')
            login(); 
        }
        if(password !== users[i].getPassword()){
            alert('contraseña incorrecta');
            login();
        }
    }
    alert('bienvenido')
}
register();
login();