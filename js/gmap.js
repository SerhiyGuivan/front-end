  
// When the window has finished loading create our google map below

    var map;
    var latlng = new google.maps.LatLng(40.6700, -73.9400); // New York
    google.maps.event.addDomListener(window, 'load', init);


    function init() {
        var mapOptions = {
            zoom: 11,
            center: latlng,
            scrollwheel: false,
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('gmap');

        // Create the Google Map using our element and options defined above
        map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'ЮВК'
        });
    }
