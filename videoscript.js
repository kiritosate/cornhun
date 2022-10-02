var vidcontainer = document.querySelector(".videos").firstElementChild;

for(var i=0; i<10;i++)
{
    var srcs = document.createElement("source");
    srcs.src = "videos/bagwis.mp4";
    srcs.type = "video/mp4";

    var video = document.createElement("video");
    video.controls = true;

    video.appendChild(srcs);

    var vi = document.createElement("li");
    vi.appendChild(video);

    vidcontainer.appendChild(vi);
}

var menu = document.querySelector(".menu");
var menubtn = document.querySelector(".menubtn");
var menubtnx = document.querySelector(".menubtnx");


menubtn.addEventListener("click", function (){
    menu.style.display = "block";
    menubtn.style.display = "none";
    menubtnx.style.display = "block";
    document.querySelector(".videos").style.margin = "240px 0px 0px 0px";
});

menubtnx.addEventListener("click", function (){
    menu.style.display = "none";
    menubtn.style.display = "block";
    menubtnx.style.display = "none";
    document.querySelector(".videos").style.margin = "20px 0px 0px 0px";
});