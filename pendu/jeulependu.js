

//   Le  joueur donne un mot secret (sans accents, sans espaces), Ce mot ne doit pas être affiché ensuite .

function pendu(){
    var mot_secret = prompt("Premier joueur : entrer un mot secret, sans accent ni espace ni chiffre")
    mot_trouve = mot_secret

    //  interdits
    const interdits = [" ", "é", "è", "ê", "î", "ï", "ë", "ù"]
    const interdits_nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    if( interdits.some(lettre => mot_secret.includes(lettre)) || interdits_nombres.some(lettre => mot_secret.includes(lettre))) {
        alert("Votre mot n'est pas valide,Ressayez!")
    } else {

        var lettres_trouvees = [""]
        var essais = 0

        do{
            var proposition = prompt("Deuxième joueur : Proposer une lettre")

            //  Vérification de la saisie du second joueur
            if( interdits.some(lettre => proposition.includes(lettre)) || interdits_nombres.some(lettre => proposition.includes(lettre))) {
                alert("Entrer une seule lettre")
            }

            if (lettres_trouvees.includes(proposition)) {
                console.log('Lettre déjà proposée')


            } else if(proposition.length > 1){
                alert('une lettre à la fois')

            } else if (mot_secret.includes(proposition)) {

                let afficher = mot_secret.replace(new RegExp(`[^${proposition}]`, "g"), "-");
                console.log(afficher)

                //  Si la lettre n’est pas dans le mot, le joueur perd un essai.
            } else {
                essais = essais + 1
                console.log("Nombre d'erreurs : " + essais + "/6")
            }

            // Afficher sur la page, les lettres trouvées et le mot caché si trouvé
            const nouveau_p = document.createElement("p");
            document.body.appendChild(nouveau_p);
            nouveau_p.innerHTML = `Lettre trouvée : ${proposition}`
            console.log(`Lettre trouvée : ${proposition}`)
            mot_secret = mot_secret.replace(proposition, "")
            lettres_trouvees.push(proposition)


        } while(mot_secret.length !== 0 && essais < 6)

        //  La partie se termine lorsque
            console.log("PERDU ! Vous avez utilisé tous les essais.")
        }  else if(0 == mot_secret.length){
            console.log("BRAVOOOO! Vous avez trouvé le mot secret : " + mot_trouve)
            const nouveau_p = document.createElement("p");
            document.body.appendChild(nouveau_p);
            nouveau_p.innerHTML = `Le mot secret était : ${mot_trouve}`
        }

        // Demande de rejouer
        if(confirm('Tu veux jouer a noueau ?')){
            pendu()
        } else {
            alert("Aurevoir!")
        }
}

}