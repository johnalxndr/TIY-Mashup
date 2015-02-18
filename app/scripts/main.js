$(document).ready(function(){
    
    var data = {"prices":[{"localized_display_name":"uberX","duration":422,"low_estimate":4,"display_name":"uberX","product_id":"57e6c58d-8ba2-4628-b1c9-6187514731cb","distance":2.97,"surge_multiplier":1.0,"estimate":"$4-6","high_estimate":6,"currency_code":"USD"},{"localized_display_name":"uberXL","duration":422,"low_estimate":9,"display_name":"uberXL","product_id":"8a268564-02e8-4fac-9aaf-df071e120d49","distance":2.97,"surge_multiplier":1.0,"estimate":"$9-12","high_estimate":12,"currency_code":"USD"}]}    
    
    

var price = data.prices[0].estimate;
var estimate = Math.floor(data.prices[0].duration / 60);
    
$("#price").html(price);
$("#time").html("Estimate Time of Pickup: " + estimate);

});    
//   
//    $.getJSON('https://api.uber.com/v1/estimates/price?start_latitude=28.541220&start_longitude=-81.381259&end_latitude=28.553572&end_longitude=-81.34691&server_token=XQysa0CmCYawqY6t8v7eWsaS7Xb3rOIRb38zqulZ', function(data) {
       
//    console.log(data.prices[0].estimate);


    
//---------------//GOOGLE MAPS API//--------------------    



function initialize() {
    
var myCenter = new google.maps.LatLng(28.553572,-81.34691);
var marker ;
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
};
google.maps.event.addDomListener(window, 'load', initialize);    
    






//    console.log(data.prices[0].estimate);
//    console.log(Math.floor(data.prices[0].duration / 60));
//});




//var events = require("https://api.uber.com/v1/estimates/price?start_latitude=28.541220&start_longitude=-81.381259&end_latitude=28.553572&end_longitude=-81.34691&server_token=XQysa0CmCYawqY6t8v7eWsaS7Xb3rOIRb38zqulZ");








//    var uberClientId = "WcDY4toB0xogrSdkoXj4azFMmOdNf0HA", 
//    uberServerToken = "XQysa0CmCYawqY6t8v7eWsaS7Xb3rOIRb38zqulZ";
////    //Uber API stuff
//
//var userLatitude, 
//    userLongitude,
//    //becoming start_latitude start_longitude
//    
//    chipotleLatitude = 28.553572, 
//    chipotleLongitude = -81.34691;
//    //becoming end_latitude end_longitude
//
//navigator.geolocation.getCurrentPosition(function (position) {
//    console.log(position);
//    userLatitude = position.coords.latitude;
//    userLongitude = position.coords.longitude;
//});


