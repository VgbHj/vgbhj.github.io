const moscow_center = { lat: 55.7545684, lng: 37.619069 };
const moscow_north = { lat: 55.9050000, lng: moscow_center.lng };
const moscow_south = { lat: 55.5735625, lng: moscow_center.lng };
const moscow_west = { lat: moscow_center.lat, lng: 37.3689277 };
const moscow_east = { lat: moscow_center.lat, lng: 37.842691 };


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

x = getRandomArbitrary(moscow_west.lng, moscow_east.lng);
y = getRandomArbitrary(moscow_south.lat, moscow_north.lat);

random_place = {lat: y, lng: x};

navigator.clipboard.writeText(random_place.lat + ", " + random_place.lng)

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: moscow_center,
    });

    const contentString = '<h4 id="firstHeading" class="firstHeading"> ' + random_place.lat + ", " + random_place.lng +'</h4>';
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
    });


    const marker = new google.maps.Marker({
        position: random_place,
        map: map,
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

}