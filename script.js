
const liste = [
    {mot: "les", definition: "forêt", genre: "N", categorie:"nom", bool: true},
    {mot: "zahrada", definition: "jardin", genre: "F", categorie:"nom", bool: true},
    {mot: "dum", definition: "maison", genre: "M", categorie:"nom", bool: true},
    {mot: "ostrov", definition: "île", genre: "F", categorie:"nom", bool: true},
    {mot: "pis", definition: "chien", genre: "N", categorie:"nom", bool: true},
    {mot: "slany", definition: "salé", genre: "X", categorie:"adjectif", bool: true},
    {mot: "tmavy", definition: "sombre", genre: "X", categorie:"adjectif", bool: true},
    {mot: "hlucny", definition: "bruyant", genre: "X", categorie:"adjectif", bool: true},
    {mot: "muj", definition: "mes", genre: "X", categorie:"mot de grammaire", bool: true},
    {mot: "vas", definition: "toi", genre: "X", categorie:"mot de grammaire", bool: true},
    {mot: "nas", definition: "nous", genre: "X", categorie:"mot de grammaire", bool: true},
    {mot: "ho", definition: "lui", genre: "X", categorie:"mot de grammaire", bool: true},
    {mot: "mam", definition: "avoir", genre: "X", categorie:"verbe", bool: true},
    {mot: "deliat", definition: "faire", genre: "X", categorie:"verbe", bool: true},
]

var prob = document.getElementById('prob');
var champ = document.getElementById('champ');
var insert = document.getElementById('insert');
//---------------BOUTONS
var start = document.getElementById('bouton');
var nom = document.getElementById('nom');
var adj = document.getElementById('adj');
var mdg = document.getElementById('mdg');
var verbe = document.getElementById('verbe');
//---------------VARIABLES
var num;
var liste2;

//------------LE LANCEUR
function question() {
    num = Math.floor(Math.random() * liste2.length);
    prob.innerText = liste2[num].definition;
    document.body.style.backgroundColor = "white";
    champ.value = "";
}

//---------COMPOSITION DE LA LISTE DE VOCABULAIRE
function question2(param) {
    liste2 = [];
    for (let i = 0; i < liste.length; i++) {
        if (liste[i].categorie == param) {
            liste2.push(liste[i]);
            console.log(liste2);
        }
    }
    question(); 
}

//----------------VALIDATION
insert.addEventListener('click', function(e) {
        e.preventDefault();
        voca = champ.value;
        if (voca === liste2[num].mot) {
            document.body.style.backgroundColor = "green";
            liste2.splice(num, 1);
            console.log(liste2);
            if  (liste2.length == 0){
                    
                    prob.innerText = "Bravo !";
                
                } else {
                    setTimeout(question, 1000);
                }
        } else {
            document.body.style.backgroundColor = "red";
        }
        
    }
)

//------------------START
start.addEventListener('click', function() {
        liste2 = liste;
        question(); 
        console.log(liste2);
    }
)

nom.addEventListener('click', function() {
    question2("nom");
    //console.log(liste2);
    }
)

adj.addEventListener('click', function() {
    question2("adjectif");
    //console.log(liste2);
}
)

mdg.addEventListener('click', function() {
    question2("mot de grammaire");
    //console.log(liste2);
}
)

verbe.addEventListener('click', function() {
    question2("verbe");
    //console.log(liste2);
}
)

