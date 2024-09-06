const obtenerInfo = (name = 'Christian', apellido = 'Mndz') => `${name} ${apellido}`;
const sum = (a=0,b=0)=> a + b;


const info = obtenerInfo('Adrian');

console.log(info);
console.log(sum(20,10))
