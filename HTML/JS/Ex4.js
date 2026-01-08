function esNumero(car) {
    let codi = car.charCodeAt(0);
    return codi >= 48 && codi <= 57;
}

function esMajuscula(car) {
    let codi = car.charCodeAt(0);
    return codi >= 65 && codi <= 90;
}

function validarContrasenya(contrasenya) {
    let errors = [];
    let teMajuscula = false;
    let teNumero = false;

    if (contrasenya.length < 8) {
        errors.push("Ha de tenir almenys 8 caràcters.");
    }

    for (let i = 0; i < contrasenya.length; i++) {
        let car = contrasenya[i];
        
        if (esMajuscula(car)) teMajuscula = true;
        if (esNumero(car)) teNumero = true;
    }

    if (!teMajuscula) errors.push("Falta almenys una majúscula.");
    if (!teNumero) errors.push("Falta almenys un número.");

    return errors;
}

let passwordValida = false;

while (!passwordValida) {
    let contrasenya = prompt("Introdueix la contrasenya:");

    let llistaErrors = validarContrasenya(contrasenya);

    if (llistaErrors.length === 0) {
        alert("✅ Contrasenya segura!");
        passwordValida = true;
    } else {
        alert("❌ Contrasenya no vàlida:\n- " + llistaErrors.join("\n- "));
    }
}