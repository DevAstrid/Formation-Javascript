// faire un commentaire une ligne alert('ok!');
/* 
Com sur plusieurs lignes

rRACCOURCI:
ctrl+: =>1 ligne
shift+alt+a => +

*/

// 1 - DECLARER UNE VARIABLES 
//le nom doit être parlant et en anglais avec premiere lettre en minuscule et Majuscule autre mot
var prenom;

// 2 -  AFFECTER UNE VALEUR 
prenom='Astrid';

//  3 - AFFICHER LA VALEUR DE LA VARIABLE DANS LA CONSOLE
console.log(prenom);

/*console.log(Prenom); Uncaught ReferenceError: Prenom is not defined
Car Javascript est sensible à la casse. Pas d'accent.
*/


// 4 - LES TYPES DE VARIABLES
//typeof permet de connaitre le type de la valeur de la variable.
console.log(typeof prenom); // prenom contient une chaine de caractère (string).

//Déclaration et affectation d'un nombre
var age=36; 
//Connaitre son type
console.log(typeof age);// age contient un nombre (number).

//VARIABLE DE TYPE FLOAT (.)
var uneDecimale= -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);// contient un nombre (number).

//BOOLEENS (vrai ou faux)
var unBooleen=false; //ou true
console.log(unBooleen);
console.log(typeof unBooleen); // contient un booléen (boulean).

//LES CONSTANTES
//C'est une entité fixe, non modifiable
/**
 * La déclaration "const" me permet de crééer une constante accessible
 * UNIQUEMENT en lecture.
 * Sa valeur ne pourra être modifiée par des réaffectations ultérieures.
 */
const host="localhost";
const user="root";
const password="toto";
// user="ahh"; => on ne peut pas faire message d'erreur "Uncaught TypeError: Assignment to constant variable".
console.log(user);

var unNombre='24'; // Attention, unNombre sera de type string à cause des quotes ''ou "" au moment de l'affectation.
console.log(unNombre);
console.log(typeof unNombre); 

//CONVERSION D'UN NOMBRE ENTIER (integer ou Int)
unNombre = parseInt (unNombre); //Int=Entier pas de virugule 
console.log(unNombre);
console.log(typeof unNombre); 



var unNombreV='24.45'; // Attention, unNombre sera de type string à cause des quotes ''ou "" au moment de l'affectation.
console.log(unNombreV);
console.log(typeof unNombreV); 

//CONVERSTION D'UN NOMBRE A VIRGULE (float)
unNombreV= parseFloat (unNombreV); //Int=Entier pas de virugule 
console.log(unNombreV);
console.log(typeof unNombreV); 



/***************************** LA PORTEE DES VARIABLE ******************************************|
|                                                                                               |
|  /*Les variables déclarées directement à la racine du fichier JS (ex: prenom)                 |    
|  sont appelées variables GLOBALES.                                                            |
|                                                                                               |                                                                                          
| Elles sont disponibles dans l'ensemble du fichier JS y compris dans les fonctions             |
|                                                                                               |  
| Les variables déclarées à l'intérieur d'une fonction sont appelées variables LOCALES.         |
|                                                                                               | 
| Elles sont disponibles UNIQUEMENT dans le scope de la console.                                |
|                                                                                               |                         
|************************************************************************************************/
