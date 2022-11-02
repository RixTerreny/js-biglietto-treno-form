const fullName = document.getElementById("name");
const km = document.getElementById("km");
const sconto = document.getElementById("select");
const genera = document.querySelector(".genera");
const annulla = document.querySelector(".annulla");
const costKm = 0.21;



genera.addEventListener("click", function() {
    let warning1 = document.querySelector(".compile1");
    let warning2 = document.querySelector(".compile2");
    let warning3 = document.querySelector(".compile3");

    warning1.innerHTML = "";
    warning2.innerHTML = "";
    warning3.innerHTML = "";

    fullName.classList.remove("error");
    km.classList.remove("error");

    if(fullName.value=="" ){
        fullName.classList.add("error");
        warning1.innerHTML += "Inserisci il nome";
    }

    if(isNaN(km.value) || km.value==""){
        km.classList.add("error");
        warning2.innerHTML += "Inserisci i chilometri da percorrere";
    }

    let cost = costKm*km.value
    let costoBiglietto = cost - (cost*sconto.value/100);
    let offerta;
    if(sconto.value=="20"){
        console.log("il costo complessivo è di " + costoBiglietto.toFixed(2)  + " EUR");
        offerta = "Biglietto under 18"
    }
    else if(sconto.value=="40"){
        console.log("il costo complessivo è di " + costoBiglietto.toFixed(2)  + " EUR");
        offerta = "Biglietto over 65"
    }
    else if(sconto.value=="1"){
        console.log("il costo complessivo è di " + cost.toFixed(2) + " EUR");
        offerta = "Biglietto standard"
    }
    else{
        warning3.innerHTML +="Inserisci un valore nel campo Fascia d'età";
        sconto.classList.add("error");
    }

    document.getElementById("biglName").innerHTML = fullName.value;
    document.getElementById("offerType").innerHTML = offerta;
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;;
    document.getElementById("codiceCp").innerHTML = Math.floor(Math.random() * 100000) + 1;;
    document.getElementById("costBiglietto").innerHTML = costoBiglietto.toFixed(2) +" Euro";
})



annulla.addEventListener("click", function() {
    km.value=null;
    fullName.value=null;
    sconto.value=null;
})
