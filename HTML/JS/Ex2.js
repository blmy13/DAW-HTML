let llistaCompra = [];

while (llistaCompra.length < 5) {

    let producte = prompt("Introdueix un producte (o deixa'l en blanc per acabar):");

    if (producte === "" || producte === null) {
        break;
    }
    llistaCompra.push(producte);
    console.log("Has afegit: " + producte);
}

console.log("La teva llista de la compra:");
console.log(llistaCompra);
