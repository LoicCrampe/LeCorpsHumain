$(".bouton").on("click", affiche); // Tous les elements avec la class "Bouton" lance la fonction "affiche" au moment du clique

function affiche() {
    var bouton = this.id; //Id de l'element qui a activé la fonction
    $(".bouton").removeClass("Red"); //Supprime la classe "Red" de tous les elements qui ont la class "bouton"
    $(".texte").hide(); //Cache tous les elements qui on la class "texte"
    $("#" + bouton).addClass("Red"); // Ajoute la class "Red" au element qui on la class de la variable bouton
    $("#" + bouton + "_text").show(); // Affiche les elements qui on la class "var bouton + _text"
}
