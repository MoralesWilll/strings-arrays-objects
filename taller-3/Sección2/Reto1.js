const calificaciones = prompt(
    "Por favor ingrese las notas separadas por comas"
);
const listaCal = calificaciones.split(",");

function sumarCal(lista) {
    const sum = lista.reduce((total, current) => {
        return total + Number(current);
    }, 0);

    return sum;
}

alert(
    "La suma de las calificaciones es: " +
        sumarCal(listaCal) +
        " y el promedio es: " +
        parseInt(sumarCal(listaCal)) / listaCal.length
);
