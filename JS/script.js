var epaule = document.getElementById("But1");
var coude = document.getElementById("But2");
var poignet = document.getElementById("But3");
var hanche = document.getElementById("But4");
var genou = document.getElementById("But5");
var cheville = document.getElementById("But6");

epaule.addEventListener("click", affiche1);
coude.addEventListener("click", affiche2);
poignet.addEventListener("click", affiche3);
hanche.addEventListener("click", affiche4);
genou.addEventListener("click", affiche5);
cheville.addEventListener("click", affiche6);

function affiche1() {
    $(".bouton").removeClass("Red");
    $(".texte").hide();
    $("#But1").addClass("Red");
    $("#epaule").show();
}

function affiche2() {
    $(".bouton").removeClass("Red");
    $(".texte").hide();
    $("#But2").addClass("Red");
    $("#coude").show();
}

function affiche3() {
    $(".bouton").removeClass("Red");
    $(".texte").hide();
    $("#But3").addClass("Red");
    $("#poignet").show();
}

function affiche4() {
    $(".bouton").removeClass("Red");
    $(".texte").hide();
    $("#But4").addClass("Red");
    $("#hanche").show();
}

function affiche5() {
    $(".bouton").removeClass("Red");
    $(".texte").hide();
    $("#But5").addClass("Red");
    $("#genou").show();
}

function affiche6() {
    $(".bouton").removeClass("Red");
    $(".texte").hide();
    $("#But6").addClass("Red");
    $("#cheville").show();
}

function affiche() {
    $(".bouton").removeClass("Red");
    $(".texte").hide();
    $("#But1").addClass("Red");
    $("#epaule").show();
}
