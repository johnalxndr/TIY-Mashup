function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(28.541220, -81.381259),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

var marker=new google.maps.Marker({
  position:myCenter,
  icon:'http://tomboywest.co.uk/wp-content/uploads/2014/09/food-btn.png'
  });

marker.setMap(map);