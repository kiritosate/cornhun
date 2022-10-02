var title = document.querySelector("title");
title.innerText = "cornhub";

var head = document.querySelector("head");

var linkcss = document.createElement("link");
linkcss.rel = "stylesheet";
linkcss.href="misc/fontawesome/fontawesome-free-6.2.0-web/css/all.css";

head.appendChild(linkcss);

var menubtn = document.querySelector(".menubtn");
var menubtnx = document.querySelector(".menubtnx");

var menu = document.querySelector(".menu");

menubtn.addEventListener("click", function (){
    menu.style.display = "block";
    menubtn.style.display = "none";
    menubtnx.style.display = "block";
});

menubtnx.addEventListener("click", function (){
    menu.style.display = "none";
    menubtn.style.display = "block";
    menubtnx.style.display = "none";
});

var h = document.querySelector(".header").children[0];

h.children[0].innerText = "corn";
