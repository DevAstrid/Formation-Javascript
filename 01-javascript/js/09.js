/*------------------------------------------------------
                    LES BOUCLES
 ------------------------------------------------------*/

 //Tant que la boucle n'est pas finie, JS ne continue pas les autres inst


 /***
  * let => limite l'élement dans le scope de la fonction
  * EN ecma 6 on prone let et const
  */

// ------------------ FOR ------------------------------//

  /**
   * Pour i=0 ; tant que i est strictement
   * inférieur ou = à 10 ; alors j'incrémente i de 1
   */

for ( let i=0 ; i<=10 ; i++ ) { // i+=2 si on voulait faire de 2 en 2
    document.write('<p>Instruction éxécutée : <strong>' + i + '</strong></p>');
}
document.write('<hr>');


// ------------------ WHILE ------------------------------//

let j=0 
while ( j<=10  ) {
    document.write('<p>Instruction éxécutée : <strong>' + j + '</strong></p>');
    // Attention l'incrémentation se fait après
    j++;
}

document.write('<hr>');

// ------------------ DO WHILE ------------------------------//
/** 
    do
    instruction
    while (condition); */


/***************************************************************
                         EXERCICE 1
 
 ***************************************************************/

 /**
  * CONSIGNES:
  * Grâce à une boucle for ou autre... afficher la liste des prénoms
  * du tableau ci dessous dans la console ou sur la page.
  */
 const prenoms= ['Jean', 'Marc', 'Paul', 'Luc', 'Hugo', 'Jacques'];

for (let i=0; i < prenoms.length; i++){
    document.write("Avec For Le prénom du tableau est  " + prenoms[i] + '</br>');
 }

document.write('<hr>');


let p = 0
while (p < prenoms.length){
    document.write("Avec while Le prénom du tableau est  " + prenoms[p] + '</br>');
    p++;
}
document.write('<hr>');

//correction
//manuellement
console.log(prenoms[0] );
console.log(prenoms[1] );
console.log(prenoms[2] );
console.log(prenoms[3] );
console.log(prenoms[4] );
console.log(prenoms[5] );



console.log('--------' );
//automatique avec
for (let index=0; index < 6; index++){
    console.log(prenoms[index] );
 }
    //autre variante

console.log('--------' );

for (let index=0; index < prenoms.length; index++){
    console.log(prenoms [ index] );
 }

 document.write('<hr>');
/***************************************************************
                         EXERCICE 2
 
 ***************************************************************/

 /**
  * CONSIGNES:
  * Créer un tableau qi contient les valeurs suivantes: 1,2,3,4,5,6,7,8,9
  * faire une boucle qui permet d'additionner toutes ces valeurs
  * 
  */

const array=[1,2,3,4,5,6,7,8,9];

console.log('--------');

let somme=0;
for (let index=0; index <9 ; index++){
   somme = array[index] + somme  ;
 }
console.log( somme );

let somme2=0;
for (let i=0; i < array.length; i++ ){
    somme2 += array[i] ;
  }
 console.log( somme2 );

 document.write('<hr>');
/***************************************************************
                         EXERCICE 3
 
 ***************************************************************/

/*
Exercice : Vos meilleurs choix

    Crée un tableau qui contetient 3 nom d'acteurs
    Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

Bonus : transformez en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
*/

const acteurs=[ "Denzel" , "Angelina", "Carter" ];

for (let i=0; i < acteurs.length; i++){
    console.log( "Le numéro " + i + ' est '+ acteurs[i] );
 }

const acteurs2=[ "Denzel" , "Angelina", "Carter" ];
const quantieme=[ "Premier" , "Deuxieme", "Troisieme" ];

for (let i=0; i < acteurs2.length; i++){ 
    console.log( "Le " + quantieme[i] + ' est '+ acteurs2[i] );
    document.write("Le " + quantieme[i] + ' est '+ acteurs2[i] +'</br>');
}

document.write('<hr>');



/***************************************************************
                         EXERCICE 4
 
 ***************************************************************/
/*
    EXERCICE :
    Utilisez la méthode getMonth() de l'objet Date pour retourner 
    le numéro du mois en cours : 0 pour janvier, 1 pour février 
    et ainsi de suite jusqu'à 11 pour décembre : var mois = (new Date).getMonth().

    Ecrivez un petit script qui retourne le nom complet du mois dans une alerte. 
    Servez-vous d'un tableau pour stocker les noms des mois.
*/
const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout",
 "Septembre", "Octobre", "Novembre", "Décembre"];
 console.log(month);
var mois = (new Date).getMonth();
console.log(mois);
console.log(month[mois]);

let i=0; 
while (i<=11){
    document.write("Nous sommes au mois de " +'<strong>' +month[i] +'</strong>' +'<br>');
    i++;
}

document.write('<hr>');
document.write('<hr>');
/***************************************************************
                         EXERCICE 5
 
 ***************************************************************/


 /* -- 
CONSIGNE : 

A partir du tableau "baseDeDonnees" fourni, vous devez mettre en place un système d'authentification. 
Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, 
et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue 
avec son nom et prénom (document.write); 

En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur. 
-- */ 

const baseDeDonnees = [ 
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'}, 
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'}, 
    {'prenom':'Nathanael','nom':'ORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'} 
    ];

const emailSaisi = prompt ("Entrez votre identifiant", '<votre email>');
const mdpSaisi = prompt ("Entrez votre mot de passe", '<Entrez votre mdp>');

for (i=0; i <= baseDeDonnees.length; i++){
    if (emailSaisi === baseDeDonnees[i].email && mdpSaisi === baseDeDonnees[i].mdp){
    document.write("Bienvenue " + baseDeDonnees[i].prenom +' '+ baseDeDonnees[i].nom +'!');
     } else {
        alert ("Mot de passe ou Email incorect");
    } 
}
