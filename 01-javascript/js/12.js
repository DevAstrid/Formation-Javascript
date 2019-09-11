/***************************************************************
                         LES EVENEMENTS
 

  Les évenements vont me permettre de délcancler une fonction
  cad une série d'instruction; suite à une action du user.

 OBJECTF: être en mesure d'être e,n mesure de capturer ses
  évènements afin d'exécuter une fonction
  
****************************************************************/


/**************************************************************
 *            Evènements: MOUSE (souris)                      * 
  
   click        : au clic sur un élément
   dblclick     : au double clic
   mouseenter   : la souris passe au dessus d'un élément
   mouseleave   : la souris sort de l'élément
   mouseover    : au passage de la souris
  
**************************************************************/

 
/**************************************************************
 *            Evènements: KEYBOARD (clavier)                  * 
  
  keydown      : une touche du clavier est enfoncée
  keyup        : une touche du clavier a été relachée
     
 *************************************************************/


/**************************************************************
 *             Evènements: WINDOW (fenêtre  )                 * 
  
  scroll      : défilement de la fenêtre
  resize      : redimensionnement de la fenêtre
     
**************************************************************/

/****************************************************************
 *              Evènements: FORM (formulaire )                  * 
  
  change      :élément <input>, <select> ou <textarea>
  submit      : à l'envoi (soumission) du formulaire
  input       : pour capter la saisie d'un user sur le champ input
     
*****************************************************************/


/****************************************************************
 *                 LES ECOUTEURS D'EVENEMENTS                   * 
  
  Pour attacher un évènement à un élément, ou autrement dit, pour
déclarer un écouteur d'évènements qui se chargera de déclencher
une fonction on utilise la syntaxe suivante:
     
*****************************************************************/

const p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge(){
    p.style.color = "red";
}

function changerLaCouleurEnNoir(){
    p.style.color = "black";
}

p.addEventListener ('mouseover' , changerLaCouleurEnRouge);
p.addEventListener ('click' , changerLaCouleurEnRouge);
p.addEventListener ('mouseleave' , changerLaCouleurEnNoir);