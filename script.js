// Variables de jeu
let essaisRestants = 10;
let pionsUtilisateur = [];
let pionsOrdinateur = [];
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
const PIONS_TAB = ["pionRouge", "pionBleu", "pionVert", "pionJaune"];

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

        console.log(pionActuel);

        pionsOrdinateur.some(() => {
            if (pionActuel == pionsOrdinateur[i]) {
                pionsBienPlace++;
                console.log(pionsOrdinateurTemp);
                return true;
            } else if (pionsOrdinateurTemp.includes(pionActuel.toString())) {
                pionsMalPlace++;
                pionsOrdinateurTemp.splice(1, pionsOrdinateurTemp.indexOf(pionActuel.toString()));
                console.log(pionsOrdinateurTemp);
                return true;
            } else {
                pionsIncorrect++;
                console.log(pionsOrdinateurTemp);
                return true;
            }
        });

        console.log(pionsBienPlace);
        console.log(pionsMalPlace);
        console.log(pionsIncorrect);
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

BOUTON_VALIDER.addEventListener("click", function () {
    // stop la fonction si l'utilisateur n'a pas mis 4 pions
    if (CARRE4.innerHTML == "") {
        console.log("non");
        return;
    }

    comparePions();
});
