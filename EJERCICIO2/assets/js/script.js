document.addEventListener("DOMContentLoaded", function () {
    
    //otorgar una variable a cada botón y a la caja
    var btn1 = document.getElementById("btn-1");
    var btn2 = document.getElementById("btn-2");
    var btn3 = document.getElementById("btn-3");
    var btn4 = document.getElementById("btn-4");
    var btn5 = document.getElementById("btn-5");
    var btn6 = document.getElementById("btn-6");
    var caja = document.getElementById("caja");

    // Agregar eventos de clic a cada botón
    btn1.addEventListener("click", function () {
        cambiarColor("#e53e3e");
    });

    btn2.addEventListener("click", function () {
        cambiarColor("#dd6b20");
    });

    btn3.addEventListener("click", function () {
        cambiarColor("#faf089");
    });

    btn4.addEventListener("click", function () {
        cambiarColor("#48bb78");
    });

    btn5.addEventListener("click", function () {
        cambiarColor("#81e6d9");
    });

    btn6.addEventListener("click", function () {
        cambiarColor("#d53f8c");
    });

    // Función para cambiar el color de la caja principal
    function cambiarColor(color) {
        caja.style.backgroundColor = color;
    }
});