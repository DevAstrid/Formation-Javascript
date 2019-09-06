 /*------------------------------------------------------
             INCREMENTATION & DECREMENTATION
 ------------------------------------------------------*/

// ** INCREMENTATION ** //

 var nb1 = 1;
 nb1 = nb1 + 1;
 //Ecriture simplifiée
 //la même chose que nb1 = nb1 + 1; toujours à pas de 1
 nb1++;


nb1 = 1;
nb1 = nb1 + 2;
 //Ecriture simplifiée
 nb1 +=2; //J'ajoute +2 à nb1 identique à  nb1 = nb1 + 2;
 nb1 +=5; //J'ajoute +5 à nb1 identique à  nb1 = nb1 + 5;



 // ** DECREMENTATION ** //

 nb1 = 1;
 nb1 = nb1 - 1;
  //Ecriture simplifiée
 nb1--;

 nb1 = 1;
 nb1 = nb1 - 2;
  //Ecriture simplifiée
  nb1 -=2; 
  nb1 -=5; 

 
 // ** SUBTILITE** //
 
 nb1=0;
 nb++;
 console.log(nb1); // =1

 nb1 = 0;
console.log(nb1++);// =0 car js lis d'abord nb1 puis fait l'incrémentation

nb1 = 0;
console.log(++nb1); // =1 js lis d'abord l'incrémentation puis nb1