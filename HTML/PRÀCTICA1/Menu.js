function mostrarPestanya(idContingut,elementClicat) {

    //Amagar contingut menú
    let continguts = document.getElementsByClassName("menu-content");
    for (let i = 0; i < continguts.length; i++) {
        continguts[i].classList.remove('active');
    }

    //Desactivar tots botons
    let botons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < botons.length; i++) {
        botons[i].classList.remove('active');
    }

    //Mostra contingut seleccionat
    document.getElementById(idContingut).classList.add('active');
    elementClicat.classList.add('active');

}


