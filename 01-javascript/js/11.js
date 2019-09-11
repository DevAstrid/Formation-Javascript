/***************************************************************
                  LA MANIPULATION DES CONTENUS
 
 ***************************************************************/


/***********************************
 *       fonction fléchée          * 
 *      Use si un paramètre        * 
 ***********************************/
l = e => console.log(e);

//équivaut à 
//Création d'une fonction 'l'
function l(e) {
    console.log(e);
}

//Création d'une fonction stockée dans une variable
l = function (e){
    console.log(e);
}

// Je souhaite récupérer mon lien google
const google = document.getElementById('google');
l(google);

//Je souhaite accéder aux informations de ce lien

    // a-- Le lien vers lequel pointe la balise
    l(google.href);

    // b-- l'ID de la balise
    l(google.id);

    // c-- la classe de la balise
    l(google.className);

    // d-- le texte de la balise
    l(google.textContent);

    // e-- comment faire pour modifier ce texte
    google.textContent = 'Mon lien google';
    l(google.textContent);

    

/***********************************
 * Ajouter un élément dans ma page * 
 *    document.createElement()     * 
 ***********************************/

 // Je crée un élément span que je stock dans ma constante
 const span = document.createElement('span');

 // Je veux donner un ID
 span.id = 'monSpan';

 // Donner du texte
 span.textContent = ' mon joli texte en js';

 // J'ai placé à l'intérieur de la balise google mon span
 google.appendChild(span);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/


const input = document.createElement('input');
l(input);
input.type = "text";
input.id = "monInput";
 //--- ajouter le champ input dans le <body>
document.body.appendChild(input);

//--- Recuperer la saisie du user
function afficherLaSaisie(){
    alert(input.value)
}

// Permet de declarer un écouteur d'évenement sur le champ input
input.addEventListener('change',afficherLaSaisie );


/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

const h1 = document.createElement('h1');
const a = document.createElement('a');

a.textContent = 'Titre de mon Article';
a.href = "http://google.fr";

h1.appendChild(a); //on place la balise a dans la balise h1
document.body.appendChild(h1); //puis la balise h1 dans le body

a.style.textDecoration = 'none';
a.style.color="red";


