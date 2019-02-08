function affiche() {
    var bouton = this.id;
    $(".bouton").removeClass("Red");
    $(".texte").hide();
    $("#" + bouton).addClass("Red");
    $("#" + bouton + "_text").show();
}
$(".bouton").on("click", affiche);
