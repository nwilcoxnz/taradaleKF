function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: -39.53719, lng: 176.84727},
        zoom: 16
    });
    var myLocation = new google.maps.LatLng(-39.53719, 176.84727);
    var marker = new google.maps.Marker({
        position: myLocation,
        title: "Property Location"
    });
     marker.setMap(map);
 }