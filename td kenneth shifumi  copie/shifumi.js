let scoreJoueur = 0;
let scoreOrdi = 0;
let egalites = 0;
const MAX_TOURS = 5; // La partie se termine après 5 tours

// Fonction principale : le joueur choisit une option
function jouer(choixJoueur) {
    // Si la partie est déjà terminée, on ne fait rien.
    if (scoreJoueur + scoreOrdi + egalites >= MAX_TOURS) {
        return;
    }

    const choixPossibles = ["pierre", "feuille", "ciseaux"];
    // Choix aléatoire pour l'ordinateur
    const choixOrdi = choixPossibles[Math.floor(Math.random() * 3)];

    let resultat = "";

    // 1. Logique d'égalité
    if (choixJoueur === choixOrdi) {
        resultat = "Égalité !";
        egalites++;
    }
    // 2. Logique de victoire du joueur
    else if (
        (choixJoueur === "pierre" && choixOrdi === "ciseaux") ||
        (choixJoueur === "feuille" && choixOrdi === "pierre") ||
        (choixJoueur === "ciseaux" && choixOrdi === "feuille")
    ) {
        resultat = "Tu gagnes !";
        scoreJoueur++;
    }
    // 3. Logique de victoire de l'ordinateur
    else {
        resultat = "L'ordinateur gagne !";
        scoreOrdi++;
    }

    // Mise à jour de l'affichage du résultat du tour
    document.getElementById("resultat").textContent =
        `Ton choix est ${choixJoueur}, l'ordinateur a choisi ${choixOrdi}. ${resultat}`;

    // Mise à jour de l'affichage des scores
    document.getElementById("score").textContent =
        `Joueur : ${scoreJoueur} | Ordinateur : ${scoreOrdi} | Égalités : ${egalites} (Tour ${scoreJoueur + scoreOrdi + egalites}/${MAX_TOURS})`;

    // Vérification de la fin de partie
    if (scoreJoueur + scoreOrdi + egalites === MAX_TOURS) {
        finPartie();
    }
}


function finPartie() {
    let messageFinal = "";

    if (scoreJoueur > scoreOrdi) {
        messageFinal = "\nBravo, tu remportes la partie ! 🏆";
    } else if (scoreOrdi > scoreJoueur) {
        messageFinal = "\nL'ordinateur remporte la partie ! 🤖";
    } else {
        messageFinal = "\nMatch nul ! La partie se termine sans vainqueur.";
    }

    // Désactiver les boutons de jeu
    const boutons = document.getElementById("choix-boutons").querySelectorAll('button');
    boutons.forEach(btn => btn.disabled = true);

    // Afficher le message final
    document.getElementById("resultat").textContent += messageFinal;
}


function rejouer() {
    scoreJoueur = 0;
    scoreOrdi = 0;
    egalites = 0;

    // Réactiver les boutons de jeu
    const boutons = document.getElementById("choix-boutons").querySelectorAll('button');
    boutons.forEach(btn => btn.disabled = false);

    // Réinitialiser les affichages
    document.getElementById("resultat").textContent = "";
    document.getElementById("score").textContent =
        `Joueur : 0 | Ordinateur : 0 | Égalités : 0 (Tour 0/${MAX_TOURS})`;
}

// Initialiser l'affichage du score au chargement de la page (pour afficher le nombre de tours)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("score").textContent =
        `Joueur : 0 | Ordinateur : 0 | Égalités : 0 (Tour 0/${MAX_TOURS})`;
});