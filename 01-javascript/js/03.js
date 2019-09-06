 /*------------------------------------------------------
                     LA CONCATENATION
 ------------------------------------------------------*/

 var DebutDePhrase = 'Aujourd\'hui '; //"Aujourd'hui " mettre \ si '
 var dateDuJour = moment().format('MMMM D YYYY');
 var suiteDePhrase = ', sont présentes : ';
 var nbApprenantes = 14;
 var finDePhrase = ' apprenantes.<br>';


 /***
  * Nous souhaitons maintenant, grâce à la concaténation
  * afficher le tout en une phrase sur notre page!
  */
console.log(dateDuJour);
document.write (
      DebutDePhrase + dateDuJour
                    + suiteDePhrase 
                    + nbApprenantes 
                    + finDePhrase  
);

/***
 * On peut mettre la variable dateDuJour nous donne accès aux fonctions
 * de l'objet date new date ().
 * Grâce au point '.' je peux utiliser ces fonctions.
 */