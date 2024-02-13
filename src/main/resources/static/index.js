console.log("Test 1: page run")

let BilettArray = [];

//Funksjon for å registerere billettinformasjon til BilettArray
function registrer() {
    console.log("Registerer startet:")
    clear_e();

    //Henter verdiene fra input
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const tlf = document.getElementById("tlf").value;
    const epost = document.getElementById("epost").value;

    // Kode for error melding, legger til 1 og viser feilmelding i stedet for å pushe til array
    let error = 0;

    x = film;
    // Hvis film 0 er valgt, vis feilmelding
    if (x === "0") {
        document.getElementById("film-e").innerHTML = "Velg film";
        error += 1;
    }

    //Sjekker om input er tomt
    x = antall;
    if (x === "" || x == null) {
        document.getElementById("antall-e").innerHTML = "Velg antall";
        error += 1;
    }

    //Sjekker om input er tomt
    x = fnavn;
    if (x === "" || x == null) {
        document.getElementById("fnavn-e").innerHTML = "Fyll inn fornavnett ditt";
        error += 1;
    }

    //Sjekker om input er tomt
    x = enavn;
    if (x === "" || x == null) {
        document.getElementById("enavn-e").innerHTML = "Fyll inn etternavn";
        error += 1;
    }

    //Sjekker om tlf har nummer
    x = tlf;
    if (isNaN(x) ||x === "" || x == null) {
        document.getElementById("tlf-e").innerHTML = "Skriv inn et mobilnummer med tall!";
        error += 1;
    }

    // Hvis ikke @ gi feilmelding
    x = epost;
    if (x === "" || x == null || !x.includes("@")) {
        document.getElementById("epost-e").innerHTML = "Fyll inn gyldig epost";
        error += 1;
    }

    console.log("error = " + error)

    //Oppretter et objekt hvis ingen error
    if(error === 0){
        console.log("if after error")
        const nyBilett = {
            film: film,
            antall: antall,
            fornavn: fnavn,
            etternavn: enavn,
            tlf: tlf,
            epost: epost
        };

        //Legger objektet i arryet
        console.log(nyBilett) // riktig
        BilettArray.push(nyBilett);

        //Lager en ny tabell for å vise bilettinformasjon
        let ut = "<table><tr>" +
            "<th>Film</th> <th>Antall</th>" +
            "<th>Navn</th> <th>Etternavn</th>" +
            "<th>Telefon</th> <th>Email</th>" +
            "</tr>";

        //Printer ut arrayet til tabellen
        for (let p of BilettArray) {
            ut += "<tr>";
            ut +=
                "<td>" + p.film + "</td>" +
                "<td>" + p.antall + "</td>" +
                "<td>" + p.fornavn + "</td>" +
                "<td>" + p.etternavn + "</td>" +
                "<td>" + p.tlf + "</td>" +
                "<td>" + p.epost + "</td>";
            ut += "</tr>";
        }
        document.getElementById("alleBilletter").innerHTML = ut;
        clear(); //Tømmer input-feltene
    }
}

//Sletter biletter på siden og tømmer arrayet
function slettBilett() {
    let ut = "";
    document.getElementById("alleBilletter").innerHTML = ut;
    BilettArray = [];
}

//For å slette input-felt
function clear(){
    // inputs
    document.getElementById('film').value = "0";
    document.getElementById("antall").value = "";
    document.getElementById("fnavn").value = "";
    document.getElementById("enavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";
}

//For å slette error meldinger
function clear_e(){
    document.getElementById("film-e").innerHTML = "";
    document.getElementById("antall-e").innerHTML= "";
    document.getElementById("fnavn-e").innerHTML = "";
    document.getElementById("enavn-e").innerHTML = "";
    document.getElementById("tlf-e").innerHTML = "";
    document.getElementById("epost-e").innerHTML = "";
}