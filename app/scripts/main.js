$(document).ready(function () {

    //Uber API stuff  
    var uberClientId = "WcDY4toB0xogrSdkoXj4azFMmOdNf0HA",
        uberServerToken = "XQysa0CmCYawqY6t8v7eWsaS7Xb3rOIRb38zqulZ";


    var userLatitude,
        userLongitude,
        chipotleLatitude = 28.553572,
        chipotleLongitude = -81.34691;
    //    //becoming end_latitude end_longitude   

    var timer;

    // GET USERS GEO LOCATION
    navigator.geolocation.watchPosition(function (position) {
        userLatitude = position.coords.latitude;
        userLongitude = position.coords.longitude;

        if (typeof timer === typeof undefined) {
            timer = setInterval(function () {
                getRates(userLatitude, userLongitude);

            }, 60000);
            console.debug(userLatitude)
                //    getRates(userLatitude,userLongitude);
        }
    });


    function getRates(latitude, longitude) {
        console.log("requesting..");
        $.ajax({
            url: "https://api.uber.com/v1/estimates/price",
            headers: {
                Authorization: "Token " + uberServerToken
            },
            data: {
                start_latitude: latitude,
                start_longitude: longitude,
                end_latitude: chipotleLatitude,
                end_longitude: chipotleLongitude
            },
            success: function (result) {
                console.log(JSON.stringify(result));
                var data = result["prices"];
                //                console.log(data);

                var uberx = data[0]
                if (typeof uberx != typeof undefined) {
                    console.log("updating time..");
                    $("#time").html("IN " + Math.floor(uberx.duration / 60.0) + "MIN");
                    $("#price").html("FOR $ " + uberx.low_estimate);
                }
            }
        });
    };
});

$("a").click(function (event) {
    // Redirect to Uber API via deep-linking to the mobile web-app
    var uberURL = "https://m.uber.com/sign-up?";
    var uberClientId = "WcDY4toB0xogrSdkoXj4azFMmOdNf0HA";
    var userLatitude,
        userLongitude,
        chipotleLatitude = 28.553572,
        chipotleLongitude = -81.34691;
    // Add parameters
    uberURL += "client_id=" + uberClientId;
    if (typeof userLatitude != typeof undefined) uberURL += "&" + "pickup_latitude=" + userLatitude;
    if (typeof userLongitude != typeof undefined) uberURL += "&" + "pickup_longitude=" + userLongitude;
    uberURL += "&" + "dropoff_latitude=" + chipotleLatitude;
    uberURL += "&" + "dropoff_longitude=" + chipotleLongitude;
    uberURL += "&" + "dropoff_nickname=" + "Thinkful";

    // Redirect to Uber
    window.location.href = uberURL;
});