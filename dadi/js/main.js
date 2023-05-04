//dichiaro le variabili
let risultato;

//selezione elementi di pagina
const avvia = document.getElementById("tira");



//premendo un bottone, vengono tirati i due dadi
avvia.addEventListener("click", function(){

    //viene generato numero player
    let numeroPlayer = Math.floor(Math.random() * 6) + 1;
    console.log(numeroPlayer);

    //viene generato numero pc
    let numeroPc = Math.floor(Math.random() * 6) + 1;
    console.log(numeroPc);

    //mostrare numeri player e pc
    document.getElementById("dadi_player").innerHTML = numeroPlayer;
    document.getElementById("dadi_pc").innerHTML = numeroPc;

    //confronto dei numeri per stabilire l'esito
    if (numeroPlayer > numeroPc) {
        risultato = "HAI VINTO!"
        document.getElementById("vincitore").classList.replace(document.getElementById("vincitore").className, "green");
    } else if (numeroPlayer < numeroPc) {
        risultato = "HAI PERSO!"
        document.getElementById("vincitore").classList.replace(document.getElementById("vincitore").className, "red");
    } else {
        risultato = "PAREGGIO"
        document.getElementById("vincitore").classList.replace(document.getElementById("vincitore").className, "black");
    };
    console.log(risultato);

    //stampare l'esito
    document.getElementById("vincitore").innerHTML = risultato;
});

