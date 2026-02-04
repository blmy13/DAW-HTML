let llistaEquips = [];
let competint = false;

function eliminarEquip(nomElim, elementLi) {
    if (competint) {
        alert("No es pot eliminar un equip si la competició ja ha començat");
        return;
    }

    let index = llistaEquips.findIndex(e => e.nom === nomElim);
    if (index !== -1) {
        llistaEquips.splice(index, 1);
        elementLi.remove(); 
        alert("Equip eliminat correctament");
    }
}

function afegirEquip() {
    if (competint) {
        alert("No es poden afegir equips un cop generats els partits");
        return;
    }

    const input = document.getElementById("nomEquip");
    let nom = input.value.trim().toUpperCase();

    if (nom === "") {
        alert("Escriu un nom d'equip");
        return;
    }

    let existeix = llistaEquips.map(e => e.nom).includes(nom);

    if (!existeix) {
        let equip = { nom: nom, punts: 0 };
        llistaEquips.push(equip);

        // Crear element llista
        let llistaUl = document.getElementById("llistaEquips");
        let nouLi = document.createElement("li");
        nouLi.innerText = nom + " ";

        let botoEliminar = document.createElement("button");
        botoEliminar.innerText = "Eliminar";

        //Crear botó eliminar
        botoEliminar.onclick = function() {
            eliminarEquip(nom, nouLi);
        };

        nouLi.appendChild(botoEliminar);
        llistaUl.appendChild(nouLi);

        input.value = ""; 
    } else {
        alert("L'equip ja existeix");
    }
}

document.getElementById("botoAfegir").addEventListener("click", afegirEquip);
  



