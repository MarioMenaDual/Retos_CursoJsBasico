var valor1 = prompt("Selecciona para jugar:\n 0.- Piedra.\n 1.- Papel.\n 2.- Tijera.")
var valorObtenido = parseInt(valor1);

if (valorObtenido>=0 && valorObtenido<3){
var valorRival = parseInt(Math.random() *3);
JugarPiedraPapelTijera(valorObtenido,valorRival)
}
else{
    console.log("Error selecciona una opcion correcta")
}


function JugarPiedraPapelTijera(tu,rivalRand){
var opciones = ["Piedra","Papel","Tijera"];
var miSeleccion = opciones[tu];
var rivalSeleccion= opciones[rivalRand];

switch (true) {
    case miSeleccion == "Piedra" && rivalSeleccion== "Tijera":
        victoria(miSeleccion,rivalSeleccion)
        break;
    
    case miSeleccion == "Tijera" && rivalSeleccion== "Piedra":
        derrota(miSeleccion,rivalSeleccion)
        break;

    case miSeleccion == "Papel" && rivalSeleccion== "Piedra":
        victoria(miSeleccion,rivalSeleccion)
        break;

    case miSeleccion == "Piedra" && rivalSeleccion== "Papel":
        derrota(miSeleccion,rivalSeleccion)
        break;

    case miSeleccion == "Tijera" && rivalSeleccion== "Papel":
        victoria(miSeleccion,rivalSeleccion)
        break;

    case miSeleccion == "Papel" && rivalSeleccion == "Tijera":
        derrota(miSeleccion,rivalSeleccion)
        break;
        
    default:
        console.log(`Has seleccionado: ${miSeleccion} y tu rival ha seleccionado: ${rivalSeleccion}\n Eso es un Empate!!!`)
        break;
}
}


function victoria(a,b) {
    return console.log(`Has seleccionado: ${a} y tu rival ha seleccionado: ${b}\n Tu ganas!!!`)
}
function derrota(a,b) {
    
    return console.log(`Has seleccionado: ${a} y tu rival ha seleccionado: ${b}\n Tu pierdes!!!`)
}

