const correo = prompt("Por favor ingrese el correo");

function validarCorreo(correo) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
}

if (validarCorreo(correo)) {
    alert("Correo electrónico válido");
}
