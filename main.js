// console.log("Hola mundo! desde la consola");
//console.log("Hola mundo! desde la consola");
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('Ingeniera en Sistemas Computacionales')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Front-end Jr')
    .pauseFor(2500)
    .start();

// Boton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let backToTopBtn = document.getElementById("botonArriba");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}
document.getElementById('botonArriba').onclick = function() {
    document.documentElement.scrollTop = 0;
}

