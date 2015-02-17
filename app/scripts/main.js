/* jshint devel:true */

var userLatitude, userLongitude; 

navigator.geolocation.watchPosition(function (position) {
userLatitude = position.coords.latitude;
userLongitude = position.coords.longitude;
console.log(position);
    });