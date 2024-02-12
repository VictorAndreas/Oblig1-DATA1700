console.log("Test 1: page run")

let BilettArray = [];
function registrer() {
    console.log("Registerer startet:")

    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const tlf = document.getElementById("tlf").value;
    const epost = document.getElementById("epost").value;

    const nyBilett = {
        film: film,
        antall: antall,
        fornavn: fnavn,
        etternavn: enavn,
        tlf: tlf,
        epost: epost
    };
    console.log(nyBilett) // riktig
    BilettArray.push(nyBilett);

    //Lager en ny tabell
    let ut = "<table><tr>" +
        "<th>film</th> <th>antall</th>" +
        "<th>navn</th> <th>etternavn</th>" +
        "<th>phone</th> <th>email</th>" +
        "</tr>";

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
    clear();
}



function slettBilett() {
    let ut = "";
    document.getElementById("alleBilletter").innerHTML = ut;
    BilettArray = [];
}

function clear(){
    document.getElementById('film').value = "0";
    document.getElementById("antall").value = "";
    document.getElementById("fnavn").value = "";
    document.getElementById("enavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";
}
