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

if(miSeleccion == "Piedra" && rivalSeleccion== "Tijera"){
    return victoria(miSeleccion,rivalSeleccion)
}
else if(miSeleccion == "Tijera" && rivalSeleccion== "Piedra"){
    return derrota(miSeleccion,rivalSeleccion)
}
else if(miSeleccion == "Papel" && rivalSeleccion== "Piedra"){
    return victoria(miSeleccion,rivalSeleccion)
}
else if(miSeleccion == "Piedra" && rivalSeleccion== "Papel"){
   return derrota(miSeleccion,rivalSeleccion)
}
else if(miSeleccion == "Tijera" && rivalSeleccion== "Papel"){
   return victoria(miSeleccion,rivalSeleccion)
}
else if(miSeleccion == "Papel" && rivalSeleccion == "Tijera"){
    return derrota(miSeleccion,rivalSeleccion)
}
else{
    return console.log(`Has seleccionado: ${miSeleccion} y tu rival ha seleccionado: ${rivalSeleccion}\n Eso es un Empate!!!`)
}
}


function victoria(a,b) {
    return console.log(`Has seleccionado: ${a} y tu rival ha seleccionado: ${b}\n Tu ganas!!!`)
}
function derrota(a,b) {
    
    return console.log(`Has seleccionado: ${a} y tu rival ha seleccionado: ${b}\n Tu pierdes!!!`)
}