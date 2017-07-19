// Palmengarten Scripte

//Suchfeld
//Funktioniert so nur von Startseite aus wegen Dateipfaden --> separate Datei für Unterseiten? oder in HTML-Seite mit rein

function suche() {
    
    var ps = "palmenseiten/";
    
    var suche = document.getElementById("search_term").value;
    suche = String(suche);
    
    var kokospalme = ["Kokos", "Kokospalme", "kokospalme", "kokos", "kokosnuss", "Kokosnuss", "kokosnusspalme", "Kokosnusspalme"];
    var dattelpalme = ["Dattelpalme", "dattelpalme", "dattel", "Dattel", "Datteln", "datteln"];
    var koenigspalme = ["königspalme", "Königspalme"];
    var hanfpalme = ["Hanfpalme", "hanfpalme", "Hanf", "hanf"];
    var washingtonia = ["Washingtonia", "washingtonia", "Washingtonpalme", "washingtonpalme", "Fächerpalme", "fächerpalme", "Petticoat-Palme", "petticoat", "Petticoatpalme", "Priesterpalme", "priesterpalme", "Kalifornische Washingtonpalme", "Fädige Washingtonpalme", "Washingtonia filifera", "Washingtonia robusta"];
    
    var anzucht = ["Anzucht", "Samen", "Palmenerde", "samen"];
    var pflege = ["Pflege von Palmen", "pflege", "palmenpflege", "Standort für Palmen", "pflege von palmen"];
    var tipps = ["Tipps zur Pflege von Palmen", "tipps", "Hinweise", "Tipps", "wie oft gießen"];
    
    if (kokospalme.indexOf(suche) > -1) {
        window.location.href = ps + "p_kokospalme.html"; // Kokosnusspalme
    } else if (dattelpalme.indexOf(suche) > -1) {
        window.location.href = ps + "p_dattelpalme.html"; // Dattelpalme
    } else if (koenigspalme.indexOf(suche) > -1) {
        window.location.href = ps + "p_koenigspalme.html"; //Koenigspalme
    } else if (hanfpalme.indexOf(suche) > -1) {
        window.location.href = ps + "p_hanfpalme.html"; // Hanfpalme
    } else if (washingtonia.indexOf(suche) > -1) {
        window.location.href = ps + "p_washingtonia.html"; //Washingtonpalme   
    } else if (anzucht.indexOf(suche) > -1) {
        window.location.href = ps + "g_anzucht.html";  //Anzucht  
    } else if (pflege.indexOf(suche) > -1) {
        window.location.href = ps + "g_pflege.html";  //Pflege  
    } else if (tipps.indexOf(suche) > -1) {
        window.location.href = ps + "g_tipps.html";  //Tipps  
    } else {    
        document.getElementById("nomatch").innerHTML = "Suche nach " + suche + ": Nichts gefunden.";
    }
};

/*Tests
function entersuche(e) {

    if (e.keyCode == 13) {
        suche();
    } 
}*/


