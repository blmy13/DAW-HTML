function mostrarText() {
    const titol = document.getElementById('titol').innerText;
    console.log("Títol: " + titol);
}

function comptarParagrafs() {
    const paragrafs = document.getElementsByClassName('text');
    let missatge = "Paràgrafs trobats: " + paragrafs.length + "\n";

    for (let i = 0; i < paragrafs.length; i++) {
        missatge += "\nParàgraf " + (i + 1) + ": " + paragrafs[i].innerText;
    }
    alert(missatge);
}

function comptarLlistes() {
    const llistes = document.getElementsByTagName('li');
    let missatge = "Elements a la llista: " + llistes.length + "\n";

    for (let i = 0; i < llistes.length; i++) {
        missatge += "\nElement " + (i + 1) + ": " + llistes[i].innerText;
    }
    alert(missatge);
}

function mostrarNoms() {
    const noms = document.getElementsByClassName('nom');
    let missatge = "Noms trobats: " + noms.length + "\n";

    for (let i = 0; i < noms.length; i++) {
        missatge += "\nNom " + (i + 1) + ": " + noms[i].innerText;
    }
    alert(missatge);
}

function seleccionarElements() {
    const seleccionats = document.querySelectorAll('.important, .highlight');
    let missatge = "Elements seleccionats: " + seleccionats.length + "\n";

    for (let i = 0; i < seleccionats.length; i++) {
        missatge += "\nElement " + (i + 1) + ": " + seleccionats[i].innerText;
    }
    alert(missatge);
    
}
