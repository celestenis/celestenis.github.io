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