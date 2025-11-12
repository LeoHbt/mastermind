// Variables de jeu
let essaisRestants = 5;
let nombreLignes = 1;

let pionsUtilisateur = [];
let pionsOrdinateur = [];

let pionsBienPlace = 0;
let pionsMalPlace = 0;
let pionsIncorrect = 0;

let CARRE1 = document.getElementById("carre1-1");
let CARRE2 = document.getElementById("carre2-1");
let CARRE3 = document.getElementById("carre3-1");
let CARRE4 = document.getElementById("carre4-1");
let CARRE_TAB = [CARRE1, CARRE2, CARRE3, CARRE4];

let DIV_RESULTAT = document.getElementById("resultat-1");

// Constantes de jeu
const SELECTEUR_PIONS = document.getElementById("selecteurPions");

const PION_ROUGE = document.getElementById("pionRouge");
const PION_BLEU = document.getElementById("pionBleu");
const PION_VERT = document.getElementById("pionVert");
const PION_JAUNE = document.getElementById("pionJaune");
const PIONS_TAB = ["pionRouge", "pionBleu", "pionVert", "pionJaune"];

const JEU = document.getElementById("jeu");

const BOUTON_VALIDER = document.getElementById("boutonValider");
const BOUTON_ANNULER = document.getElementById("boutonAnnuler");

// initialise les pions de l'ordinateur aléatoirement
for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * 4);
    pionsOrdinateur[i] = PIONS_TAB[randomIndex];
}

// trouve une place libre dans le tableau et ajoute la couleur à l'index
function ajouterPion(couleur) {
    for (let i = 0; i < CARRE_TAB.length; i++) {
        if (CARRE_TAB[i].innerHTML == "") {
            CARRE_TAB[i].innerHTML =
                '<img class="' +
                couleur +
                ' col-9 position-absolute top-50 start-50 translate-middle " src="img/pions/' +
                couleur +
                '.png" alt="" />';
            break;
        }
    }
}

function comparePions() {
    let pionActuel = "";

    let pionsOrdinateurTemp = Array.from(pionsOrdinateur);

    for (let i = 0; i < 4; i++) {
        pionsUtilisateur[i] = CARRE_TAB[i].innerHTML;
    }

    for (let i = 0; i < 4; i++) {
        if (pionsUtilisateur[i].includes("pionRouge")) {
            pionActuel = "pionRouge";
        }
        if (pionsUtilisateur[i].includes("pionBleu")) {
            pionActuel = "pionBleu";
        }
        if (pionsUtilisateur[i].includes("pionVert")) {
            pionActuel = "pionVert";
        }
        if (pionsUtilisateur[i].includes("pionJaune")) {
            pionActuel = "pionJaune";
        }

        pionsOrdinateur.some(() => {
            if (pionActuel == pionsOrdinateur[i]) {
                pionsBienPlace++;
                pionsOrdinateurTemp.splice(i, 1, "test");
                console.log(pionsOrdinateurTemp);
                return true;
            } else {
                pionsIncorrect++;
                console.log(pionsOrdinateurTemp);
                return true;
            }
        });
    }
    for (let i = 0; i < 4; i++) {
        pionsOrdinateur.some(() => {
            if (pionsOrdinateurTemp.indexOf(pionActuel.toString()) != -1) {
                pionsOrdinateurTemp.splice(pionsOrdinateurTemp.indexOf(pionActuel.toString()), 1, "test");
                pionsMalPlace++;
                pionsIncorrect--;
            }
        });
    }
}

function ajoutLigne(nombreLigne) {
    JEU.insertAdjacentHTML(
        "beforeend",
        `<div class="row mx-auto text-center text-light">

                <div
                    id="carre1-${nombreLigne}"
                    class="col-sm-2 col-m-2 ms-auto p-0 m-3 bg-light position-relative border border-dark border-4 rounded carre"
                ></div>
                <div
                    id="carre2-${nombreLigne}"
                    class="col-sm-2 col-m-2 p-0 m-3 bg-light position-relative border border-dark border-4 rounded carre"
                ></div>
                <div
                    id="carre3-${nombreLigne}"
                    class="col-sm-2 col-m-2 p-0 m-3 bg-light position-relative border border-dark border-4 rounded carre"
                ></div>
                <div
                    id="carre4-${nombreLigne}"
                    class="col-sm-2 col-m-2 p-0 m-3 bg-light position-relative border border-dark border-4 rounded carre"
                ></div>
                <div
                    id="resultat-${nombreLigne}"
                    class="col-sm-2 col-m-2 me-auto p-0 m-3 bg-dark position-relative border border-light border-4 rounded d-flex flex-wrap resultat"
                >
            </div>`
    );
}

function afficherResultat() {
    for (let i = 0; i < pionsBienPlace; i++) {
        DIV_RESULTAT.insertAdjacentHTML("beforeend", '<img class="col-6 p-2" src="img/pions/white.png" alt="" />');
    }
    for (let i = 0; i < pionsMalPlace; i++) {
        DIV_RESULTAT.insertAdjacentHTML("beforeend", '<img class="col-6 p-2" src="img/pions/pionRouge.png" alt="" />');
    }
    for (let i = 0; i < pionsIncorrect; i++) {
        DIV_RESULTAT.insertAdjacentHTML("beforeend", '<img class="col-6 p-2" src="img/pions/black.png" alt="" />');
    }
}

// addEventListener sur chaques pions de couleurs
Array.from([PION_ROUGE, PION_BLEU, PION_VERT, PION_JAUNE]).forEach((element) => {
    element.addEventListener("click", function () {
        let elementId = element.id;
        ajouterPion(elementId);
    });
});

BOUTON_ANNULER.addEventListener("click", function supprimer() {
    for (let i = 0; i < CARRE_TAB.length; i++) {
        CARRE_TAB[i].innerHTML = "";
    }
});

BOUTON_VALIDER.addEventListener("click", function () {
    // stop la fonction si l'utilisateur n'a pas mis 4 pions
    if (CARRE4.innerHTML == "") {
        return;
    }

    let gameWon = false;
    nombreLignes++;

    comparePions();
    afficherResultat();

    essaisRestants--;

    if (pionsBienPlace == 4) {
        gameWon = true;
    }
    if (gameWon == true) {
        JEU.insertAdjacentHTML(
            "beforeend",
            '<div class="row"><p class="fs-1 m-0 my-3 text-success rounded border border-4 border-dark mx-auto col-auto bg-light">GAGNÉ !</p></div>'
        );
        BOUTON_VALIDER.disabled = true;
        BOUTON_ANNULER.disabled = true;
        return;
    }
    if (essaisRestants == 0) {
        JEU.insertAdjacentHTML(
            "beforeend",
            '<div class="row mx-auto"><p class="fs-1 m-0 my-3 text-danger rounded border border-4 border-dark ms-auto me-auto col-auto bg-light">PERDU !</p></div>'
        );
        BOUTON_VALIDER.disabled = true;
        BOUTON_ANNULER.disabled = true;
        return;
    }

    ajoutLigne(nombreLignes);

    CARRE1 = document.getElementById(`carre1-${nombreLignes}`);
    CARRE2 = document.getElementById(`carre2-${nombreLignes}`);
    CARRE3 = document.getElementById(`carre3-${nombreLignes}`);
    CARRE4 = document.getElementById(`carre4-${nombreLignes}`);
    CARRE_TAB = [CARRE1, CARRE2, CARRE3, CARRE4];

    DIV_RESULTAT = document.getElementById(`resultat-${nombreLignes}`);

    pionsBienPlace = 0;
    pionsMalPlace = 0;
    pionsIncorrect = 0;
});
