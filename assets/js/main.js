function addListeners(){
    var zdjecia = document.querySelectorAll("#products a")
    zdjecia.forEach(element => {
        element.addEventListener("click", function(e){
            e.preventDefault()
            var obraz = this.querySelector("img")
            var source = obraz.getAttribute("src")
            sessionStorage.setItem("obraz", source)
            window.location = this.href;
            console.log(source)
        })
        
    });
}
addListeners()
function initMap() {
   
    const uluru = { lat: 49.909, lng: 20.198 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
  
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }