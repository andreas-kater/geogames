var map = L.map('mapid').setView([38.4772832,-100.5684629], 4);
L.tileLayer.provider('CartoDB.PositronNoLabels').addTo(map);

// var geojsonLayer = new L.GeoJSON.AJAX("assets/world110m.geojson");
// geojsonLayer.addTo(map);


var states = [{
  "type": "Feature",
  "properties": {"party": "Republican", "name":"ANDI"},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-104.05, 48.99],
      [-97.22, 48.98],
      [-96.58, 45.94],
      [-104.03, 45.94],
      [-104.05, 48.99]
    ]]
  }
}, {
  "type": "Feature",
  "properties": {"party": "Democrat"},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-109.05, 41.00],
      [-102.06, 40.99],
      [-102.03, 36.99],
      [-109.04, 36.99],
      [-109.05, 41.00]
    ]]
  }
}];

L.geoJSON(states, {
  style: function (feature) {
    switch (feature.properties.party) {
      case 'Republican':
        return {color: "#ff0000"};
      case 'Democrat':
        return {color: "#0000ff"};
    }
  },
  onEachFeature: function onEachFeature(feature, layer) {
    layer.on('click', function (e) {
      // e = event
      console.log(e, feature);
      // You can make your ajax call declaration here
      //$.ajax(...
    })
  }
}).addTo(map);

map.on('click', function (e) {

  // console.log(e);
  var popLocation = e.latlng;
  var popup = L.popup()
    .setLatLng(popLocation)
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);
});