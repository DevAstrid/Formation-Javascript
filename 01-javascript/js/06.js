 /*------------------------------------------------------
                    LES FONCTIONS
 ------------------------------------------------------*/

 //Une fonction a un nom unique

// ** Déclarer une fonction ** //
/**
 * Les instructions se seront excécutées que lorque ma fonction sera appelée.
 */
function bonjour(){
    // instruction js
    alert('Bonjour !');
      // instruction js
}

/**
 * J'exécute ma fonction et je déclenche ses instructions
 */
//bonjour(); 


/**
 * 
 ditBonjour définie 2 arguments.

 */

function ditBonjour(prenom, nom){
    console.log( prenom + ' ' + nom );
    document.write(
        'Bonjour <strong>'
            + prenom   
            + ' '
            + nom
            + '</strong> ! <br>'
    );

}

ditBonjour('Astrid', 'JONATHAN');
ditBonjour('Toto', 'BRO');


function add(nb1,nb2){
    resultat = nb1 + nb2;
    document.write("L'addition de nb1 et nb2 = " + resultat + '<br>' );
}
add(5,6);
add(15,87)


function del(nb1,nb2){
    resultat = nb2 - nb1;
    document.write("La soustraction de nb1 et nb2 = " + resultat + '<br>' );
}
del(5,6);
del(15,87);


function ajouter(nb1,nb2){
    var resultat = nb1 + nb2; //resultat est une variable local use only dans la fonction
    return resultat; // return determine quelle information va retourner la fonction
}

var afficherResultat = ajouter(4,5);
console.log(afficherResultat);
document.write("L'addition de nb1 et nb2 = " + afficherResultat + '<br>' );

// Exo calcul tva montant HT. Sachant que la tva peut varier entre 5.5,8.5,10,20.
//Calcul montant ttc



function calculTva(montantht,tva){
    var ht = montantht * tva;
    return ht;
}
var ttc = calculTva(1000,1.085); //exemple tva 8.5
console.log(ttc);
document.write("Montant TTC est  " + ttc+ '€ <br>' );

var ttc = calculTva(100,1.055); //exemple tva 5.5
console.log(ttc);
document.write("Montant TTC est  " + ttc+ '€ <br>' );

function calculTva(prixHt,tauxTva){
    return prixHt +(prixHt * (tauxTva/100));
}

var ttc = calculTva(10,20); 
console.log(ttc);
document.write("Montant TTC est  " + ttc+ '€ <br>' );

//correction Prof
function calculTva(montantHt,tauxTva= 8.5){
    return montantHt +(montantHt * (tauxTva/100));
}

var ttc1 = calculTva(10); 
var ttc2 = calculTva(10 , 5.5); 
var ttc3 = calculTva(10 , 20); 

console.log(ttc1);
console.log(ttc2);
console.log(ttc3);


//EXO 2: Conversion EURO en Dollar US

function convert(montantTtc, tauxDollar = 1.1032 ){
    return montantTtc * tauxDollar;
}
var dollar = convert(100);
console.log(dollar);
document.write("Montant en dollar est  " + dollar+ '$ <br>' );


//EXO 2: Conversion Dollar en  EURO 

function convert(montantTtc, tauxConversion = 0.90666 ){
    return montantTtc * tauxConversion;
}
var euro = convert(10);
console.log(euro);
document.write("Montant en euro est  " + euro+ '€ <br>' );

//Correction formateur
function convertEurToUsd (montantEuro , tauxConversionUsd = 1.1032){
    return montantEuro * tauxConversionUsd;
}
var montantUsd = convertEurToUsd (20);
console.log(montantUsd);


/***********************************
 *       fonction fléchée          * 
 *      Use si un paramètre        * 
 ***********************************/
l = e => console.log(e);