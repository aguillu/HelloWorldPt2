function minutefunction() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); 
    var div = document.getElementById("minute");
    div.innerHTML = time;

  }
  
  function imagebyebye() {
    var photo = document.getElementById("photo");
    photo.style.visibility = "hidden";
  }

  function hello(firstName){
      alert("Hello " + firstName );
  }

  function namebday() {
    var name = window.prompt("Enter your name: ");
    var bday = window.prompt("Enter your birthday: ");
    var alert = document.getElementById("popup");
    alert.innerText = 'Your name is ' + name + ' your birthday is ' + bday; 
    }
    
function mapLoad(){
var latLng = [41.789649, -87.599702];
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
mbURl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}/?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
var grayscale = L.tileLayer(mbURl, {id:'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
streets = L.tileLayer(mbURl, {id:'mapbox/light-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
var map = L.map('map', {
    center: latLng,
    zoom: 16, 
    layers: [streets]
});
var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};
L.control.layers(baseLayers).addTo(map);
L.marker(latLng).addTo(map)
.bindPopup("<b>UChicago<br>Campus</b>").openPopup();

var popup = L.popup();
function onMapClick(e){
    popup
    .setLatLng(e.latLng)
    .setContent("You clicked the map at" + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick)

}

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);