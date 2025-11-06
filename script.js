// Variables de jeu
let essaisRestants = 10
let pionsBienPlace = 0
let pionsMalPlace = 0
let pionsIncorrect = 0

// Constantes de jeu
const CARRE1 = document.getElementById('carre1')
const CARRE2 = document.getElementById('carre2')
const CARRE3 = document.getElementById('carre3')
const CARRE4 = document.getElementById('carre4')
const CARRE_TAB = [CARRE1, CARRE2, CARRE3, CARRE4]

const PION_ROUGE = document.getElementById('pionRouge')
const PION_BLEU = document.getElementById('pionBleu')
const PION_VERT = document.getElementById('pionVert')
const PION_JAUNE = document.getElementById('pionJaune')
const BOUTON_VALIDER = document.getElementById('BoutonValider')
const BOUTON_ANNULER = document.getElementById('boutonAnnuler')

function ajouterPion(couleur) {
    
}

Array.from([PION_ROUGE, PION_BLEU, PION_VERT, PION_JAUNE]).forEach(element => {
    element.addEventListener('click', function() {
        console.log(element)
    })
});