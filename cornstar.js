var menu = document.querySelector(".menu");
var menubtn = document.querySelector(".menubtn");
var menubtnx = document.querySelector(".menubtnx");


menubtn.addEventListener("click", function (){
    menu.style.display = "block";
    menubtn.style.display = "none";
    menubtnx.style.display = "block";
    document.querySelector(".stars").style.margin = "240px 0px 0px 0px";
});

menubtnx.addEventListener("click", function (){
    menu.style.display = "none";
    menubtn.style.display = "block";
    menubtnx.style.display = "none";
    document.querySelector(".stars").style.margin = "20px 0px 0px 0px";
});

function generate(){
    var stars = document.querySelector(".stars").children[0];
    var imgdiv = document.createElement("div")
    var img = document.createElement("img");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    
    var starsdiv = document.createElement("div");
    var starspan = document.createElement("span");
    var starsli = document.createElement("li");

    img.src = "starimg/juan.jpg";
    
    imgdiv.appendChild(img);
    
    h3.innerText = "juan analiza";

    p.innerText = "i love ANALiza inshort i love myself!";

    

    starsdiv.id = "stars";

    for(var j = 0; j<5; j++)
    {
        var i = document.createElement("i");
        i.className = "fa-solid fa-star";
        starsdiv.appendChild(i);
    }
    
    starspan.appendChild(h3);
    starspan.appendChild(p);
    starspan.appendChild(starsdiv);

    starsli.appendChild(imgdiv);
    starsli.appendChild(starspan);
    stars.appendChild(starsli);
}

for(var n = 0; n<10; n++){
    generate();
}

var starn = 50;
var lp = 0;

if(starn<=20)
{
    lp=1;
}else if(starn<=40)
{
    lp=2;
}else if(starn<=60)
{
    lp=3;
}else if(starn<=80)
{
    lp=4;
}else if(starn<=100 || starn>=100)
{
    lp=5;
}

var star = document.querySelectorAll("#stars");
star.forEach(element=> {
        for(var i=0;i<lp; i++)
    {
        element.children[i].style.color = "orange";
    }
});