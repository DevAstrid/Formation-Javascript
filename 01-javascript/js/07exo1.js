    /**
     * 
     * Réaliser une fonction permettant à un internaute de : 
        - Saisir son Prénom dans un Prompt 
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ? 
        - Saisir son Age 
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE]. 
        - Afficher ensuite un récapitulatif dans la page. 
        Bonjour [PRENOM], tu as [AGE] ! 
    */

/* 
    var prenom = prompt('Saisir votre prenom');
    console.log(prenom );

    function saisirAge () {
        return age = prompt('Bonjour ' + prenom +  ' , Quel age as-tu ? '  );
     
    }
    var reponseAge = saisirAge();
    reponseAge=parseInt(reponseAge); //astuce donnée par le prof pour transformer string en nombre
    console.log(reponseAge );

    function calculAnnee (){
        var anneeEnCours = new Date();
            return annee = anneeEnCours.getFullYear() - reponseAge ;
    }
    var anneeNaissance = calculAnnee();
    console.log(anneeNaissance );

    alert('Tu es donc né en '+ anneeNaissance);

    document.write( 'Bonjour '+ prenom +' , tu as ' + reponseAge + ' ans ! <br>');
 */

    /***CORRECTION PROF */

// -- 01.Création d'une fonction

function presentation () {

    // -- 02.Demander à l'utilisateur son prénom via un prompt
    var prenom = prompt("Quel est votre prénom ?", '<votre prénom>'); //<votre prénom> est affiché comme un placeholder
    console.log(prenom);

    // -- 03.Demander son age
    var age = parseInt(
    prompt("Bonjour " + prenom + " , Quel age as-tu ?",'<votre age>')
    );
    console.log(age); 
    console.log(typeof age);
    
    // -- 04.Calculer l'année de naissance de l'utilisateur
    var objetDate = new Date();
    var DateDeNaissance = objetDate.getFullYear() - age;
    alert(" Tu es né en "+ DateDeNaissance);

    // -- 05.Afficher le recapitulatif
    document.write("Bonjour " + prenom + " tu as " + age + " !");
}
presentation();