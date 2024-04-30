let calificacionesInput = prompt(
    "Ingrese las calificaciones de los estudiantes separadas por comas:"
);

let calificaciones = calificacionesInput.split(",");
calificaciones = calificaciones.map((calificacion) => parseInt(calificacion));

let promedioCalificaciones =
    calificaciones.reduce(
        (acumulador, calificacion) => acumulador + calificacion,
        0
    ) / calificaciones.length;
let calificacionMaxima = Math.max(...calificaciones);
let calificacionMinima = Math.min(...calificaciones);
let numeroAprobados = calificaciones.filter(
    (calificacion) => calificacion >= 70
).length;
let numeroReprobados = calificaciones.filter(
    (calificacion) => calificacion < 70
).length;
let calificacionesOrdenadas = [...calificaciones].sort((a, b) => b - a);

alert(`
Promedio de Calificaciones: ${promedioCalificaciones}
Calificación Máxima: ${calificacionMaxima}
Calificación Mínima: ${calificacionMinima}
Número de Aprobados: ${numeroAprobados}
Número de Reprobados: ${numeroReprobados}
Lista de Calificaciones Ordenadas de Mayor a Menor: ${calificacionesOrdenadas}
`);
