// Función constructora 
function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

//array para almacenar los autos
var autos = [];
//contador de los autos creados
var cantidad = 0;

//ciclo para crear autos 30 veces
while (cantidad < 30) {
    var aMarca = prompt("Introducir la marca");
    var aModelo = prompt("Introducir el modelo");
    var aAnnio = prompt("Introducir el año");    
    var newAuto = new auto(aMarca, aModelo, aAnnio);
    autos.push(newAuto);
cantidad++
    
}
//ciclo para mostrar la lista de autos creados
for (let index = 0; index < autos.length; index++) {
    console.log(autos[index])
}