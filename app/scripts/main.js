var myCenter=new google.maps.LatLng(28.541220, -81.381259);
var marker;

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom: 15,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE,
    icon:''
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);