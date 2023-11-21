//RECORRIDO 

//UN local quiere sar las ventas diarias que tiene 

//FOR

let ventasDiarias = [98.5, 88, 102.30, 77,7, 103, 110];

for (let i = 0; i < ventasDiarias.length; i++) {
    console.log(`Día ${i + 1}: ${ventasDiarias[i]} ventas`);
}

//for-of

console.log("\nUsando for-of:");
let dia = 1;
for (let ventas of ventasDiarias) {
    console.log(`Día ${dia}: ${ventas} ventas`);
    dia++;
}

//foreach

console.log("\nUsando forEach:");
ventasDiarias.forEach(function (ventas, index) {
    console.log(`Día ${index + 1}: ${ventas} ventas`);
});

//map

console.log("\nUsando map:");
let ventasDuplicadas = ventasDiarias.map(function (ventas) {
    return ventas * 2;
});

ventasDuplicadas.forEach(function (ventas, index) {
    console.log(`Día ${index + 1}: ${ventas} ventas (duplicadas)`);
});

