/*
* Faire une calculatrice en faisant un prompt qui demande ça

1 -> addition
2 -> soustraction
3 -> multiplication
4 -> division
5 -> sortie

* puis demander 2 chiffres et
* afficher le calcul
pour chaque calcul, il faudra créer une fonction
 */


function soustraction(x, y) {
    return x - y
}

function addition(x, y) {
    return x + y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    if (0 === y) {
        return 'erreur division par zéro'
    }

    return x / y
}

function calculatrice() {
    let sortie = true

    // while(5 !== +operateur) {
    while (sortie) {
        let operateur = prompt(`1 -> addition
2 -> soustraction
3 -> multiplication
4 -> division
5 -> sortie`)



        if (5 === +operateur || 'sortie' === operateur) {
            console.log('Au revoir')
            sortie = false
        } else {
            let operateurNumber = parseFloat(prompt('Tapez un chiffre'))
            let operateurSecondNumber = +prompt('Tapez un second chiffre')
            let calcul

            switch (operateur) {
                case '+':
                case 'addition':
                case '1':
                    calcul = addition(operateurNumber, operateurSecondNumber)
                    break

                case '-':
                case '2':
                case 'soustraction':
                    calcul = soustraction(operateurNumber, operateurSecondNumber)
                    break

                case '*':
                case '3':
                case 'multiplication':
                    calcul = multiply(operateurNumber, operateurSecondNumber)
                    break

                case '/':
                case '4':
                case 'division':
                    calcul = divide(operateurNumber, operateurSecondNumber)
                    break

                default:
                    console.log('opérateur non reconnu')
            }

            console.log('mon résultat est : ' + calcul)
        }
    }
}




