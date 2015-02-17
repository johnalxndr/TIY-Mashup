/* jshint devel:true */

//var events = require("../uber.json");
////var _ = require('lodash');

//
//$.getJSON("uber.json", function(key, value){
//    $("#time").append("<p>"+value.prices+"</p>");
//});
//
//
//var uberClientId = "WcDY4toB0xogrSdkoXj4azFMmOdNf0HA", 
//    uberServerToken = "XQysa0CmCYawqY6t8v7eWsaS7Xb3rOIRb38zqulZ",
//    //Uber API stuff

var userLatitude, 
    userLongitude,
    //becoming start_latitude start_longitude
    
    chipotleLatitude = 28.553572, 
    chipotleLongitude = -81.34691;
    //becoming end_latitude end_longitude

navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});

//var data = 