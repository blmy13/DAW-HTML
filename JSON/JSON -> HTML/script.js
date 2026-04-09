//Conversió de JSON a HTML
const textJSON = 
`{
  "esdeveniment": "Jornades Tech 2026",
  "data": "2026-05-15",
  "lloc": "Barcelona",
  "participants": [
    { "id": "USR-1001", "nom": "Anna Serra", "edat": 25, "email": "anna@email.com" },
    { "id": "USR-1002", "nom": "Marc Vila", "edat": 17, "email": "marc@email.com" },
    { "id": "USR-1003", "nom": "Laura Soler", "edat": 19, "email": "laura@email.com" }
  ]
}`; 

const dades = JSON.parse(textJSON);

//Inserir dades a l'html
document.getElementById("titol").textContent = dades.esdeveniment;
document.getElementById("info").innerHTML = `Data: ${dades.data} | Lloc: ${dades.lloc}`;


//Crear taula a partir de les dades JSON
let html = "<table border='1'>";
html += "<tr><th>ID</th><th>Nom</th><th>Edat</th><th>Email</th><th>Tipus</th></tr>";

let totalParticipants = dades.participants.length;
let majorsEdat = 0;

//Recorregut generar files i classificar majors d'edat
for (let p of dades.participants) {
    let tipus = "";
    let colorFons = "";

    if (p.edat >= 18) {
        tipus = "Adult";
        colorFons = "lightgreen"; 
        majorsEdat++; 
    } else {
        tipus = "Menor";
        colorFons = "lightcoral"; 
    }

    html += `<tr style="background-color: ${colorFons};">`;
    html += `<td>${p.id}</td>`;
    html += `<td>${p.nom}</td>`;
    html += `<td>${p.edat}</td>`;
    html += `<td>${p.email}</td>`;
    html += `<td>${tipus}</td>`;
    html += "</tr>";
}

html += "</table>";

//taula i resum a l'html
document.getElementById("taulaParticipants").innerHTML = html;
document.getElementById("resum").innerHTML = `Total participants: ${totalParticipants} | Majors d'edat: ${majorsEdat}`;
