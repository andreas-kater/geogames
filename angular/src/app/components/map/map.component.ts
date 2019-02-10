import { Component, OnInit } from '@angular/core';
import '../../scripts/leaflet.js';
import '../../scripts/script.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //    lazyLoad('leaflet.bundle.js');
    //    lazyLoad('leaflet-providers.bundle.js');
    //    lazyLoad('leaflet.ajax.min.bundle.js');
    //    lazyLoad('script.bundle.js');

    function lazyLoad(filename) {
      const script = document.createElement('script');
      script.src = filename;
      script.type = 'text/javascript';
      script.async = false;
      script.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  }

}
