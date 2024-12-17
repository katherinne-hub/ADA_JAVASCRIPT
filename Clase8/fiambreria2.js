const prompt = require ("prompt-sync")({sigint: true});

let temperatura = parseFloat(prompt("que temperatura hace? "));
let clima = prompt ("esta lloviendo? si o no ") === 'si';

 if (temperatura <=14){
    console.log("lleva un abrigo");
 } else if( temperatura >=20){
    console.log("usa protector solar");
 }
 if (clima ){
    console.log("lleva un paraguas");
    
 } else {
    console.log("no te olvides el pan...")
 }
