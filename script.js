// Variables de jeu
let essaisRestants = 10;
let pionsBienPlace = 0;
let pionsMalPlace = 0;
let pionsIncorrect = 0;

// Constantes de jeu
const CARRE1 = document.getElementById("carre1");
const CARRE2 = document.getElementById("carre2");
const CARRE3 = document.getElementById("carre3");
const CARRE4 = document.getElementById("carre4");
const CARRE_TAB = [CARRE1, CARRE2, CARRE3, CARRE4];

const PION_ROUGE = document.getElementById("pionRouge");
const PION_BLEU = document.getElementById("pionBleu");
const PION_VERT = document.getElementById("pionVert");
const PION_JAUNE = document.getElementById("pionJaune");

const BOUTON_VALIDER = document.getElementById("BoutonValider");
const BOUTON_ANNULER = document.getElementById("boutonAnnuler");

// trouve une place libre dans le tableau et ajoute la couleur à l'index
function ajouterPion(couleur) {
    for (let i = 0; i < CARRE_TAB.length; i++) {
        if (CARRE_TAB[i].innerHTML == "") {
            CARRE_TAB[i].innerHTML =
                '<img class="col-9 position-absolute top-50 start-50 translate-middle" src="img/pions/' +
                couleur +
                '.png" alt="" />';
            break;
        }
    }
}

// addEventListener sur chaques pions de couleurs
Array.from([PION_ROUGE, PION_BLEU, PION_VERT, PION_JAUNE]).forEach((element) => {
    element.addEventListener("click", function () {
        let elementId = element.id;
        ajouterPion(elementId);
    });
});

BOUTON_ANNULER.addEventListener("click", function () {
    for (let i = 0; i < CARRE_TAB.length; i++) {
        CARRE_TAB[i].innerHTML = "";
    }
});
