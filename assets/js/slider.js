function zmienObraz(source){
    var target = document.getElementById("skrypcik");
    
    target.src = source;
    
}
function addListener(){
    var miniatury = document.querySelectorAll(".na img");
    miniatury.forEach(miniatura=>{
        src=miniatura.getAttribute("src");
        miniatura.addEventListener("click", function(){
            src=this.getAttribute("src");
            zmienObraz(src)

        });
    })
}
addListener();
 var obrazek = sessionStorage.getItem("obraz")
 zmienObraz(obrazek)