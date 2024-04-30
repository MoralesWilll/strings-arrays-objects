let contrasena = prompt("Ingrese una contraseña");
let contrasenaSegura = true;
var alerta = "";

if (contrasena.length < 8) {
    alerta = alerta + "La contraseña debe contener al menos ocho caracteres \n";
    contrasenaSegura = false;
}
if (!/\d/.test(contrasena)) {
    alerta = alerta + "La contraseña debe contener al menos un numero \n";
    contrasenaSegura = false;
}
if (!/[a-zA-Z]/.test(contrasena)) {
    alerta = alerta + "La contraseña debe contener al menos una letra \n";
    contrasenaSegura = false;
}
if (!/[!@#$%^&*()+=_-{}[\]:;"'?,.<>|\/\\`~]/.test(contrasena)) {
    alerta =
        alerta + "La contraseña debe contener al menos un carácter especial \n";
    contrasenaSegura = false;
}
if (contrasenaSegura) {
    alert("Contraseña segura");
}
if (!contrasenaSegura) {
    alert(alerta);
}
