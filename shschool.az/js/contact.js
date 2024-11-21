// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $(".select-service").select2();

  //   // contact map
  if ($("#locationMap").length > 0) {
    function initMap(getId) {
      var location = { lat: 40.38549576507358, lng: 49.82828771128039 };
      var map = new google.maps.Map(document.getElementById(getId), {
        zoom: 15,
        center: location,
        zoomControl: true,
      });

      marker = new google.maps.Marker({
        map: map,
        position: location,
        animation: google.maps.Animation.DROP,
      });
    }

    initMap("locationMap");
    google.maps.event.addDomListener(window, "load", initMap);
  }
});
