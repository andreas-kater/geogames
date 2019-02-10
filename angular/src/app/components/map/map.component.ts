import { Component, OnInit } from '@angular/core';
import { latLng, LatLng, tileLayer, polygon } from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

  constructor() { }

  options = {
    zoom: 4,
    center: latLng(38.4772832, -100.5684629)
  };

  layers: any = [
      tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
        { maxZoom: 18, attribution: '...' })
  ];

  addPolygon() {
    this.layers.push(
      polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]])
    );
  }
  ngOnInit() {
    this.addPolygon();
  }

}
