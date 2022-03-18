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



function arrayexample() {
    var name1 = window.prompt("enter an animal: ");
    var name2 = window.prompt("enter another animal: ");
    var name3 = window.prompt("enter a third animal: ");
    var names = [name1, name2, name3]
    console.log(names);
    names.sort(); 
    console.log(names);
    var alert = document.getElementById("animals"); 
    alert.innerText = names;   
    }



    var itemTitle = {itemName: String(document.getElementById("itemName").value)};
    var myLatLng = {lat: Number(document.getElementById("lat").value), lng: Number(document.getElementById("lng").value)};
    console.log(myLatLng);
    var map = L.map('map', {
      center: [myLatLng.lat, myLatLng.lng],
      zoom: 11
    });
    L.esri.basemapLayer('Topographic').addTo(map);
    L.marker([myLatLng.lat, myLatLng.lng]).addTo(map);
    // map.invalidateSize(true);
    setTimeout(function(){map.invalidateSize(true);},500);

    function exportTableToCSV(filename) {
        //Create a CSV file to download the set.
        var csv = [];
        var headings = document.querySelectorAll("thead tr");
        var rows = document.querySelectorAll("tbody tr");
      
        //Create the header row
        var row = [], cols = headings[0].querySelectorAll("th");
        for (var m = 0; m < cols.length; m++)
        row.push('"' + cols[m].innerText + '"');
        csv.push(row.join(","));
      
        //Create the data rows
        for (var i = 0; i < rows.length; i++) {
          var row = [], cols = rows[i].querySelectorAll("td");
          for (var j = 0; j < cols.length; j++)
          //Wrap the row in quotes
          //If the column contains an image, output the image pi
          if (cols[j].querySelectorAll('img').length==1) {
            var prev = cols[j].querySelectorAll('img')
            row.push(prev[0].src.split("&",1))
          } else {
            row.push('"'+cols[j].innerText+'"');
          }
          csv.push(row.join(","));
        };
      
        // Download CSV file
        downloadCSV(csv.join("\n"), filename);
      }
      
      function downloadCSV(csv, filename) {
        var csvFile;
        var downloadLink;
      
        // CSV file
        csvFile = new Blob([csv], {type: "text/csv"});
      
        // Download link
        downloadLink = document.createElement("a");
      
        // File name
        downloadLink.download = filename;
      
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
      
        // Hide download link
        downloadLink.style.display = "none";
      
        // Add the link to DOM
        document.body.appendChild(downloadLink);
      
        // Click download link
        downloadLink.click();
      }
      
      // Credit: Chris Coyier codepen.io/chriscoyier/pen/tIuBL
      (function(document) {
        'use strict';
      
        var LightTableFilter = (function(Arr) {
      
          var _input;
      
          function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
              Arr.forEach.call(table.tBodies, function(tbody) {
                Arr.forEach.call(tbody.rows, _filter);
              });
            });
          }
      
          function _filter(row) {
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
          }
      
          return {
            init: function() {
              var inputs = document.getElementsByClassName('light-table-filter');
              Arr.forEach.call(inputs, function(input) {
                input.oninput = _onInputEvent;
              });
            }
          };
        })(Array.prototype);
      
        document.addEventListener('readystatechange', function() {
          if (document.readyState === 'complete') {
            LightTableFilter.init();
          }
        });
      
      })(document);

      $(document).ready(function() {
        $('#ochreTable').DataTable({
          "pageLength": 25,
          "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
          "deferRender": true,
          language: {
            search: "_INPUT_",
            searchPlaceholder: "Search records..."
          },
          "columnDefs": [
            { "width": "10%", "targets": 0 },
            { "width": "20%", "targets": 1 },
            { "width": "20%", "targets": 2 }
          ]
        });
      } );
      
      