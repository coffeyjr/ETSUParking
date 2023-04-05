/*
 * Name: Jackson Coffey
 * Description: Leaflet JavaScript Map
 * Created: 02/28/23
 * Last Updated: 02/28/23
 */

/* Initializing Map */
var map = L.map('map').setView([36.30258584306485, -82.369561252428231], 17);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(map);

/* Click each parking spot to center and zoom on it. */
function clickZoom(e) {
    map.setView(e.target.getLatLng(),20);
}

/* ------ Parking Lots - Students ------ */

/* ------ Parking Lot 21b */
var lot21b = L.icon({
    iconUrl: 'images/number_21.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30182, -82.37312], {icon: lot21b}).addTo(map).bindPopup("<b>Available Spots: 23</b>").on('click', clickZoom);

var latlng = [[36.30217, -82.37363],[36.30135, -82.37304], [36.30158, -82.37252], [36.30245, -82.37314]];
var polygon = L.polygon(latlng, {color: '#FFC72C'}).addTo(map).on('click', clickZoom);


/* ------ Parking Lots - Faculty ------ */

/* ------ Parking Lot 21a */
var lot21a = L.icon({
    iconUrl: 'images/b_number_21.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30216, -82.37246], {icon: lot21a}).addTo(map).bindPopup("<b>Available Spots: 46</b>").on('click', clickZoom);

var latlng = [[36.30281, -82.37244],[36.30191, -82.37186], [36.30158, -82.37250], [36.30245, -82.37311]];
var polygon = L.polygon(latlng, {color: '#041E42'}).addTo(map).on('click', clickZoom);