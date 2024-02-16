document.addEventListener("DOMContentLoaded", function () {

    var valor1Input = document.getElementById("valor1");
    var valor2Input = document.getElementById("valor2");
    var resultadoSpan = document.querySelector(".resultado");
    var btnSumar = document.getElementById("btn-sumar");
    var btnRestar = document.getElementById("btn-restar");

    // Función para sumar
    btnSumar.addEventListener("click", function () {
        var valor1 = parseFloat(valor1Input.value) || 0;
        var valor2 = parseFloat(valor2Input.value) || 0;
        var resultado = valor1 + valor2;
        resultadoSpan.textContent = resultado;
    });

    // Función para restar
    btnRestar.addEventListener("click", function () {
        var valor1 = parseFloat(valor1Input.value) || 0;
        var valor2 = parseFloat(valor2Input.value) || 0;
        var resultado = Math.max(valor1 - valor2, 0); // Mostrar 0 si el resultado es negativo
        resultadoSpan.textContent = resultado;
    });
});