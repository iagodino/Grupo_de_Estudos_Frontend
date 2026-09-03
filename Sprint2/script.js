navigator.geolocation.getCurrentPosition(function (position) {
    var latLng = new google.maps.latLng(
        position.coords.latitude,
        position.coords.longitude,
    );

    var myOptions = {
        zoom: 8,
        center: latLng,
        mapTypeId: google.maps.mapTypeId.TERRAIN,
        disableDefaultUI: true,
    };
    var map = new google.maps.Map(
        document.querySelector("#map_canvas"),
        myOptions,
    );
    var em = document.createElement("em");
    var para = document.querySelector("p");
    em.textContent = "Hello there!";
    para.appendChild(em);
});