var menu = document.querySelector(".menu");
var menubtn = document.querySelector(".menubtn");
var menubtnx = document.querySelector(".menubtnx");


menubtn.addEventListener("click", function (){
    menu.style.display = "block";
    menubtn.style.display = "none";
    menubtnx.style.display = "block";
    document.querySelector(".about").style.margin = "240px 0px 0px 0px";
});

menubtnx.addEventListener("click", function (){
    menu.style.display = "none";
    menubtn.style.display = "block";
    menubtnx.style.display = "none";
    document.querySelector(".about").style.margin = "20px 0px 0px 0px";
});