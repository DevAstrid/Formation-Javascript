/*------------------------------------------------------
                    LES CONDITIONS
 ------------------------------------------------------*/

// ** IF ** //

/* 
/*  var majoriteLegale = 18;
 if( 19 >= majoriteLegale  ){
    /**
    * Comme 19 est bien supérieur à 18 (majoriteLegale);
    * alors les instructions de ma condition sont respectées.
    */
   /*  alert("Bienvenue !");
 }
 if( 14 >= majoriteLegale  ){
    /**
    * Comme 14 est bien inférieur à 18 (majoriteLegale);
    * alors les instructions ne sont pas respectées.
    */
    /* alert("Bienvenue !");
 } else if (18 == majoriteLegale){
    /**
    * Comme 18 est égale à majoriteLegale;
    * la condition s'execute.
    */
   /*alert("C'est un peu juste !");

 } else { //else n'est pas obligatoire
    /**
    * si aucune des conditions sont validées.
    * alors je rentre dans else
    */
  /* alert("Va voir chez Google si j'y suis !");

 }*/

 /*-------------------------------------------------------------------------
 créer une fonction de vérifier l'age du visiteur (prompt)
 s'il a la majorité légale, alors je lui souhaite la bienvenue,
 sinon je fais une redirection sur google après lui avoir signalé le soucis.
        location.assign("http://www.mozilla.org"); // or
        location = "http://www.mozilla.org";
  -------------------------------------------------------------------------*/
 
/*
  function age(){
    var saisirAge = parseInt( prompt ("Saisir votre age?", '<votre age>'));
    if (saisirAge >=18 ) {
        alert("Bienvenue !");
    }
    else if (saisirAge >= 12 && saisirAge < 18){
        alert ("Vous n'avez pas l'age autorisé ") ;
                   
         document.write("Vous allez être dirigé dans 10 sec." );
        setTimeout(Redirect(), 10000);   
    
       
    }
    else {
         alert("Reviens quand tu seras plus grand");
    }
  }

  function Redirect() {
    document.location = "http://www.google.com";
         } 
age();
*/
/*------- correction --------*/
/*
const majorite = 18;
function userEstMajeur (age){
//return age >=18; // JS fait automatiquement un if
    if (age>18){
        return true; //oui
    } else {
        return false; //non
    }
}

const age2= parseInt(
    prompt ("Bonjour, Quel age avez-vous ?",'<saisissez votre age>')
);

if ( userEstMajeur(age2)){
    alert ("Bienvenue sur mon site réservé aux majeurs");
} else {
    alert ("Vous devez être majeur pour accéder à ce site");
    document.location.href = "http://www.google.com";
}
*/
/* -------------------------------------------------------------\
|               LES OPERATEURS DE COMPARAISON                   |
|   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
|                                                               |
|   L'Opérateur de comparaison " == " signifie : Egal à.        |
|   Il permet de vérifier que 2 variables sont identiques.      |
|                                                               |
|   L'Opérateur de comparaison " === " signifie : Strictement   |
|   égal à. Il va comparer la valeur, mais aussi le type !      |
|                                                               |
|   if( 14 == "14" ) {} = true                                  |
|   if( 14 === '14' ) {} = false                                |
|   if( 14 === 14 ) {} = true                                   |
|                                                               |
|   L'Opérateur " != " : Différent de.                          |
|   L'Opérateur " !== " : Strictement Différent de.             |
|                                                               |
|   if( 12 != 14 ) {} = true                                    |
|   if( 12 !== '14' ) {} = true                                 |
|   if( 12 !== 12 ) {} = false                                  |
|   if( 12 !== '12' ) {} = true ; Ici, 12 est bien différent    |
|   de 12 à cause du type.                                      |
|                                                               |
\ ------------------------------------------------------------ */

/* ----------------------------------------------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */
//On ne précise pas ou se trouve l'erreur => car piratage sait ou il y a l'erreur



// // -- BASE DE DONNEES
/*const email = "wf3@hl-media.fr";
const mdp = "wf3";


function saisi (){
    const emailsaisi= prompt ("Entrez votre adresse email" , '<saisissez identifiant email>');
    const mdpsaisi= prompt("Entrez votre adresse mdp" , '<saisissez mdp>');
        if (emailsaisi === email && mdpsaisi === mdp ){
      
                alert ("Bienvenue dans votre espace personnel");
                
            }else {
                alert('Erreur dans votre mot de passe ou email');
        }  

}
saisi();*/
/*********************correction */
// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

// -- 1. Demander à l'utilisateur son email / mdp
const emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre Email>");
const mdpPrompt = prompt("Quel est votre mdp ?", "<Saisissez votre Mot de Passe>");

// -- 2. Je vérifie si l'email / mdp saisie par l'utilisateur correspondent avec ceux dans la BDD.

// If imbriqué...
if ( email === emailPrompt ) {
    if(mdp === mdpPrompt) {
        alert("Bienvenue " + emailPrompt + " !");
    }
}

// Une seule condition
if ( email === emailPrompt && mdp === mdpPrompt ) {
    // -- 3. Tous est ok, l'utilisateur est authentifié
    alert("Bienvenue " + emailPrompt + " !");
} else {
    // -- 4. Erreur au niveau de l'authentification
    alert("ATTENTION, email / mdp incorrect.");
}

// -- Avec les fonctions
function connexion( emailUser, mdpUser ) {
    if ( email === emailUser && mdp === mdpUser ) {
        return true;
    } else {
        return false;
    }
}

if ( connexion( emailPrompt, mdpPrompt ) ) {
    alert("Bienvenue " + emailPrompt + " !");
} else {
    alert("ATTENTION, email / mdp incorrect.");
}


         /* -------------------------------------------|   |------------- *\
        /                                              |   |                \
       /           ~         LES OPERATEURS LOGIQUES          ~              \
      /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\
        |                                                                   |
        |   # L'Opérateur ET : &&. Si la combinaison email et emailUser     |
        |   correspond, ET la combinaison mdp et mdpUser correspond.        |
        |                                                                   |
        |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT         |
        |   correspondre pour être validée.                                 |   
        |   Ex. if(emailUser === email && mdpUser === mdp) { ... }          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
        |                                                                   |
        |   # L'Opérateur OU : ||. Si la combinaison email et emailUser     |
        |   correspond, ET / OU la combinaison mdp et mdpUser correspond.   |
        |                                                                   |
        |   --> Dans cette condition, au moins l'une des deux doit          |
        |   correspondre pour être validée.                                 |
        |   Ex. if(emailUser === email || mdpUser === mdp) { ... }          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
        |                                                                   |
        |   # L'Opérateur " ! " ou encore NOT.                              |
        |   Il signifie le CONTRAIRE DE, DIFFERENT DE                       |
        |                                                                   |
        |   var monUtilisateurEstApprouve = true;                           |
        |   if ( !monUtilisateurEstApprouve ) { ... }                       |
        |   Si mon utilisateur n'est pas approuvé                           |
        |                                                                   |
        |  Revient à écrire                                                 |
        |  if ( monUtilisateurEstApprouve === false ) { ... }               |
        |                                                                   |
        \*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _*/