// document.addEventListener('DOMContentLoaded', function () {
//     const formulario = document.getElementById('formulario');
//     const nombre = document.getElementById('nombre');
//     const asunto = document.getElementById('asunto');
//     const mensaje = document.getElementById('mensaje');

//     formulario.addEventListener('submit', function (event) {
//         event.preventDefault(); // Evitar el envío del formulario por defecto

//         // Validar nombre
//         const nombreValido = validar(nombre.value, 'errorNombre', 'El nombre es requerido.');

//         // Validar asunto
//         const asuntoValido = validar(asunto.value, 'errorAsunto', 'El asunto es requerido.');

//         // Validar mensaje
//         const mensajeValido = validar(mensaje.value, 'errorMensaje', 'El mensaje es requerido.');

//         // Mostrar mensaje de éxito si todos los campos son válidos
//         if (nombreValido && asuntoValido && mensajeValido) {
//             mostrarExito('Formulario enviado con éxito.');
//         }
//     });

//     function validar(valor, elementoError, mensaje) {
//         const expresionRegular = /[A-Za-z]/;
//         const elemento = document.querySelector(`.${elementoError}`);

//         if (!valor.trim()) {
//             elemento.textContent = `El ${elementoError.substring(5)} es requerido.`;
//             return false;
//         } else if (!expresionRegular.test(valor)) {
//             elemento.textContent = mensaje;
//             return false;
//         } else {
//             elemento.textContent = '';
//             return true;
//         }
//     }

//     function mostrarExito(mensaje) {
//         const resultado = document.querySelector('.resultado');
//         resultado.textContent = mensaje;

//     }
// });

let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el funcionamiento normal del formulario

    limpiarErrores();

    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;

    let resultado = validar(nombre, asunto, mensaje);

    if (resultado) {
        exito();
    }
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito";
}

function validar(nombre, asunto, mensaje) {
    let inputValidado = true;

    let validacionNombre = /[a-zA-Z ]/g;
    if (!validacionNombre.test(nombre)) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
        inputValidado = false;
    }

    let validacionAsunto = /[a-zA-Z ]/g;
    if (!validacionAsunto.test(asunto)) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido.";
        inputValidado = false;
    }

    let validacionMensaje = /[a-zA-Z ]/g;
    if (!validacionMensaje.test(mensaje)) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
        inputValidado = false;
    }

    return inputValidado;
}

