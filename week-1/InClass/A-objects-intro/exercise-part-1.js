/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable


For example:
var car = {
    brand: "Seat",
    model: "Arona",
    color: "white",
    horsepower: 115,
    doors: 5
};

*/

var cat = {
    name: "Shiro",
    color: "Blanco",
    edad: 4.6,
    peso: 4,
    size: 50,
    procedencia: "Barcelona",
    ubicacion: {
        lon: 54.182,
        lat: 7.320
    }
}
console.log(cat)
var camara1 = {
    megapixeles: "16 MP",
    apertura: 1.8
}
var camara2 = {
    megapixeles: "8 MP",
    apertura: 1.9
}
var camara3 = {
    megapixeles: "32 MP",
    apertura: 10.8
}
var telefonoMobil = {
    marca: "iPhone",
    modelo: "10x",
    year: 2020,
    precio: 1000,
    camaras: [
        camara1,
        camara2,
        camara3
    ]
}
console.log(telefonoMobil.camaras)