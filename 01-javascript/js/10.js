
/***************************************************************
                      LE DOM
 
 ***************************************************************/


 /**Le DOM est une interface de développement JS pour HTML
  * Grâce au DOM je ais être en mesure d'accéder ou modifier mon
  * code HTML.
  * 
  * L'ogjet "document" c'est le point d'entrée du contenu HTML
  * 
  * Chaque page chargée vers mon navigateur à un objet "document".
  * 
  * /
  

/*
Comment puis-je faire pour récupérer les différentes informations
de la page HTML.
*/


/***********************************
 *     document.getElementById     *    
 ***********************************/
/* document.getElementById() est une fonction qui va permettre 
de récupérer un élément HTML à partir de son ID */

const bonjour = document.getElementById("bonjour");
console.log(bonjour);

/*************************************
 *  document.getElementsByClassName  *    
 *************************************/
/* document.getElementsByClassName()est une fonction qui va permettre 
de récupérer un ou plusieurs élément HTML à partir de leur classe */

const contenu = document.getElementsByClassName("contenu");
console.log(contenu);

/*************************************
 *   document.getElementsByTagName   *    
 *************************************/
/* document.getElementsByTagName() est une fonction qui va permettre 
de récupérer un ou plusieurs élément HTML à partir de leur balise*/

const p = document.getElementsByTagName("p");
console.log(p);

/*************************************
 *           querySelector           *    
 *************************************/

// https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector

console.log ( document.querySelector('#bonjour'));
console.log ( document.querySelectorAll('.contenu'));
console.log ( document.querySelectorAll('p'));