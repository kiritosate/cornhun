
var imagedv = document.querySelector(".images").firstElementChild;

for(var i=0; i<10; i++)
{
    var img = document.createElement("img");
    img.src = "images/c.png";

    var imgli = document.createElement("li");

    imgli.appendChild(img);
    imagedv.appendChild(imgli);
}