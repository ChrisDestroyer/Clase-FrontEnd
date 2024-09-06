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
    inventarios: [
        {
            id: 1,
            color: 'Rojo',
            cantidad: 5,
            precio: 110000000
        },
        {
            id: 2,
            color: 'Blanco',
            cantidad: 2,
            precio: 100000000
        },
        {
            id: 3,
            color: 'Amarillo',
            cantidad: 5,
            precio: 115000000
        },
    ],
    totalInventario: function (){
        let total = 0;
        this.inventarios.forEach(inventario => {
            total = total + inventario.precio*inventario.precio;
        });
        return total;
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

console.log(carro.totalInventario()); 