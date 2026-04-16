const formulari = document.getElementById('formulari');
const inputNom = document.getElementById('nom');
const inputEmail = document.getElementById('email');
const inputTelefon = document.getElementById('telefon');
const llistaDiv = document.getElementById('llista');
const jsonPre = document.getElementById('json');
const btnBuidar = document.getElementById('btnBuidar');

let contactes = [];

formulari.addEventListener("submit", function(event) { 
    event.preventDefault();
    afegirContacte();
});

function afegirContacte() {
    const nouContacte = {
        nom: inputNom.value,
        email: inputEmail.value,
        telefon: inputTelefon.value

    };
    contactes.push(nouContacte);
    actualitzarInterficie();
    formulari.reset();
}

function actualitzarInterficie() {
    llistaDiv.innerHTML = '';
    const ul = document.createElement('ul');

    contactes.forEach(c => {
        const li = document.createElement('li');
        li.textContent = `${c.nom} - ${c.email} - ${c.telefon}`;
        ul.appendChild(li);
    });
    llistaDiv.appendChild(ul);

    const jsonString = JSON.stringify(contactes, null, 2);
    jsonPre.textContent = jsonString;
}

btnBuidar.addEventListener("click", function() {
    contactes = [];
    actualitzarInterficie();
});
