let nomClient = "";

while (!nomClient || nomClient.trim() === "" || nomClient === null) {
    nomClient = prompt("Introdueix el teu nom:");
}
const reserves = [];
let continuar = true;

while (continuar) {
    let pelicula = "";
    while (!pelicula || pelicula.trim() === "") {
        pelicula = prompt("Nom de la pel·lícula:");
    }

    let numPersones = 0;
    while (isNaN(numPersones) || numPersones <= 0) {
        numPersones = parseInt(prompt(`Quantes persones per a "${pelicula}"?`));
    }

    reserves.push({
        pelicula: pelicula,
        persones: numPersones
    });

    let resposta = prompt("Vols afegir una altra reserva? (si/no)").toLowerCase();
    if (resposta !== "si") {
        continuar = false; 
}

let totalEntrades = 0;
const PREU_ENTRADA = 8;p

console.log(`--- Reserves ---`);
console.log(`Client: ${nomClient}`);
console.log(`Detalls:`);

reserves.forEach((reserva, index) => {
    console.log(`${index + 1}. ${reserva.pelicula}: ${reserva.persones} persones`);
    totalEntrades += reserva.persones;
});

let importTotal = totalEntrades * PREU_ENTRADA;

console.log(`---------------------------`);
console.log(`Total d'entrades: ${totalEntrades}`);
console.log(`Import total a pagar: ${importTotal} €`);
}