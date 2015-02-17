//var prices = require("https://api.uber.com/v1/estimates/price?start_latitude=28.541220&start_longitude=-81.381259&end_latitude=28.553572&end_longitude=-81.34691&server_token=XQysa0CmCYawqY6t8v7eWsaS7Xb3rOIRb38zqulZ");
//
//var _ = require('lodash');

var myCenter=new google.maps.LatLng(28.553572,-81.34691);
var marker;

//_.pick(prices, 'estimates');
//
//console.log('estimates');

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:18,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE,
  
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


