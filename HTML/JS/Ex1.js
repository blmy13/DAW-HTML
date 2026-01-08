const usuariCorrecte = "admin";
const contrasenyaCorrecta = "1234";

const usuariIntroduit = prompt("Introdueix el nom d'usuari:");
const contrasenyaIntroduida = prompt("Introdueix la contrasenya:");

if (usuariIntroduit === usuariCorrecte && contrasenyaIntroduida === contrasenyaCorrecta) {
    console.log("Benvingut al sistema, admin!");
} else {
    console.log("Usuari o contrasenya incorrectes");
}