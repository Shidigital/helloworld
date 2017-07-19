// Palmengarten 

//menu show/hide

function menu(sub) {  
    var status = document.getElementById(sub).style.display;
    if (status == "none") {
        document.getElementById(sub).style.display = "block";
    } else {
        document.getElementById(sub).style.display = "none";
    }
};

//remove_circle_outline --> Minus im Kreis
//add_circle_outline --> Plus im Kreis