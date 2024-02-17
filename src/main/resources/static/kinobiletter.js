const BillettRegister=[];

function visBillettRegister(){
    // skriv ut

    let ut = "<table><tr>" +
        "<th>film</th><th>billettAntall</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Telefonnr</th>" +
        "</tr>";

    for (let p of BillettRegister){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.billettAntall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.epost+"</td><td>"+p.telefonnr+"</td>";
        ut+="</tr>";
    }
    document.getElementById("BillettRegister").innerHTML=ut;
}



function registrerBillett(){
    const film = document.getElementById("film").value;
    const billettAntall = document.getElementById("billettAntall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    //Nullstill tidligere feilmeldinger
    document.getElementById("filmError").innerText = "";
    document.getElementById("billettAntallError").innerText = "";
    document.getElementById("fornavnError").innerText = "";
    document.getElementById("etternavnError").innerText = "";
    document.getElementById("telefonnrError").innerText = "";
    document.getElementById("epostError").innerText = "";

    // Opprett en variabel for å samle feilmeldingene
    let errorMessages = "";

    // Sjekk om alle feltene er fylt ut
    if (film === "Velg film") {
        errorMessages += "Vennligst velg en film.\n";
        document.getElementById("filmError").innerText = "Vennligst velg en film.";
    }
    if (billettAntall === "") {
        errorMessages += "Vennligst velg et antall billetter.\n";
        document.getElementById("billettAntallError").innerText = "Vennligst velg et antall billetter.";
    }
    else if (isNaN(billettAntall) || parseInt(billettAntall) <= 0) {
        errorMessages += "For lavt antall valgt, må være mer enn 0.\n";
        document.getElementById("billettAntallError").innerText = "For lavt antall valgt, må være mer enn 0.";
    }
    if (fornavn === "") {
        errorMessages += "Vennligst skriv inn fornavn.\n";
        document.getElementById("fornavnError").innerText = "Vennligst skriv inn fornavn.";
    }
    if (etternavn === "") {
        errorMessages += "Vennligst skriv inn etternavn.\n";
        document.getElementById("etternavnError").innerText = "Vennligst skriv inn etternavn.";
    }
    if (telefonnr === "") {
        errorMessages += "Vennligst skriv inn telefonnr.\n";
        document.getElementById("telefonnrError").innerText = "Vennligst skriv inn telefonnr.";
    }
    else if(isNaN(telefonnr)){
        errorMessages += "Vennligst skriv inn telefonnr.\n";
        document.getElementById("telefonnrError").innerText = "Vennligst skriv inn telefonnr.";
    }
    if (epost === "") {
        errorMessages += "Vennligst skriv inn epost.\n";
        document.getElementById("epostError").innerText = "Vennligst skriv inn epost.";
    } //Eposten må inneholde en av de følgende @variantene
    else if(!epost.includes("@gmail.com") && !epost.includes("@live.no") && !epost.includes("@hotmail.com") && !epost.includes("@yahoo.com"))
        errorMessages += "Vi stoler kunn på epostadresser med @live/gmail/hotmail/yahoo.\n";
    document.getElementById("epostError").innerText = "Vi stoler kun på epostadresser med @live/gmail/hotmail/yahoo."
    // Hvis errorMessages-variabelen ikke er tom, vis alle feilmeldingene
    if (errorMessages !== "") {
        return; // Avslutt funksjonen uten å registrere billetten
    }


    //Oppretter billetten som et objekt i arrayet
    const billett = {
        film : film,
        billettAntall : billettAntall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    };

    BillettRegister.push(billett);

    //nullstill inputboksene
    document.getElementById("film").value="";
    document.getElementById("billettAntall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value=""

    // Nullstill feilmeldinger
    document.getElementById("filmError").innerText = "";
    document.getElementById("billettAntallError").innerText = "";
    document.getElementById("fornavnError").innerText = "";
    document.getElementById("etternavnError").innerText = "";
    document.getElementById("telefonnrError").innerText = "";
    document.getElementById("epostError").innerText = "";

    visBillettRegister()}

function slettBilletter(){
    //Sletter alle billettene i arrayet
    BillettRegister.splice(0, BillettRegister.length)

    visBillettRegister();
}

</script>

