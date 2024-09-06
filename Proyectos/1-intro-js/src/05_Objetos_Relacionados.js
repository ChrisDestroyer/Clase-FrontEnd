const carro = {
    id: 1,
    nombre: 'Laferrari',
    fecha: new Date(),
    marca: {
        id: 1,
        nombre: 'ferrari',
        ubicacion: 'Europa',
        age: 100
    },
    costo: 1000000,
    saludo: function(){
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}

carro.costo = 15000000
console.log(carro);
const salu = carro.saludo();
console.log(salu)