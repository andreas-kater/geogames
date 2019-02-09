var map = L.map('mapid').setView([2.2655324, 23.5914664], 4);
// L.tileLayer.provider('CartoDB.PositronNoLabels').addTo(map);

var geojsonLayer = new L.GeoJSON.AJAX("assets/world110m.geojson");
geojsonLayer.addTo(map);

map.on('click', function (e) {
  var popLocation = e.latlng;
  var popup = L.popup()
    .setLatLng(popLocation)
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);
});