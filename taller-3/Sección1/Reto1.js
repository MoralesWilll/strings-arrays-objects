const dominio = "myDomain";
let usuarios;
let llaves = [];

function crearUsuario(nombre) {
    let nombre2 = nombre.toLowerCase();
    let nombrePartido = nombre2.split(" ");
    let nom = nombrePartido[0];
    let ape = nombrePartido[1];
    nom = nom.slice(0, 3);
    ape = ape.slice(0, 3);
    let usuario = nom + ape;
    let contador = 0;
    if (usuarios) {
        llaves = Object.keys(usuarios);
        llaves.forEach((e) => {
            if (e.includes(usuario)) {
                contador = contador + 1;
            }
        });
        if (contador == 0) {
            correo = usuario + "@" + dominio + ".com";
            usuarios[usuario] = correo;
        } else if (contador > 0) {
            usuario = usuario + contador;
            correo = usuario + "@" + dominio + ".com";
            usuarios[usuario] = correo;
        }
    } else if (!usuarios) {
        correo = usuario + "@" + dominio + ".com";
        usuarios = {
            [usuario]: correo,
        };
    }
}

do {
    const nombre = prompt(
        "Por favor ingrese su nombre y apellido separado por espacio"
    );
    crearUsuario(nombre);
    var condicional = confirm("Desea ingresar otro usuario?");
} while (condicional);
console.log(usuarios);
