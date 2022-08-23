
const liste = [
    {mot: "les", definition: "forêt", genre: "N", categorie:"nom", bool: true},
    {mot: "zahrada", definition: "jardin", genre: "F", categorie:"nom", bool: true},
    {mot: "dum", definition: "maison", genre: "M", categorie:"nom", bool: true},
    {mot: "ostrov", definition: "île", genre: "F", categorie:"nom", bool: true},
    {mot: "zahrada", definition: "jardin", genre: "F", categorie:"nom", bool: true},
    //
    {mot: "slany", definition: "salé", genre: "X", categorie:"adjectif", bool: true},
    {mot: "tmavy", definition: "sombre", genre: "X", categorie:"adjectif", bool: true},
    {mot: "hlucny", definition: "bruyant", genre: "X", categorie:"adjectif", bool: true},
    //
    {mot: "muj", definition: "mes", genre: "X", categorie:"mot de grammaire", bool: true},
    {mot: "vas", definition: "toi", genre: "X", categorie:"mot de grammaire", bool: true},
    {mot: "nas", definition: "nous", genre: "X", categorie:"mot de grammaire", bool: true},
    {mot: "ho", definition: "lui", genre: "X", categorie:"mot de grammaire", bool: true},
    //
    {mot: "mam", definition: "avoir", genre: "X", categorie:"verbe", bool: true},
    {mot: "deliat", definition: "faire", genre: "X", categorie:"verbe", bool: true},
]

var insert = document.getElementById('insert');
var button = document.querySelector('button');
var prob = document.getElementById('prob');
var champ = document.getElementById('champ');
var num;


function question() {
    num = Math.floor(Math.random() * liste.length);
    prob.innerText = liste[num].definition;
    document.body.style.backgroundColor = "white";
    champ.value = "";
    console.log(num);
    console.log(liste.length);

}

//----------------VALIDATION
insert.addEventListener('click', function(e) {
        e.preventDefault();
        voca = champ.value;
        if (voca === liste[num].mot) {
            document.body.style.backgroundColor = "green";
            setTimeout(question, 1000);
        } else {
            document.body.style.backgroundColor = "red";
        }
        //question();
        //document.body.style.backgroundColor = "red";

    }
)

//------------------START
button.addEventListener('click', function() {
        question(); 
    }
)
