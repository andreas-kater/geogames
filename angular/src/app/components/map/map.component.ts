import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    one();
    async function one() {
      await lazyLoad('leaflet.bundle.js');
      await lazyLoad('leaflet-providers.bundle.js');
      await lazyLoad('leaflet.ajax.min.bundle.js');
      await lazyLoad('script.bundle.js');
    }

    function lazyLoad(filename) {
      const script = document.createElement('script');
      script.src = filename;
      script.type = 'text/javascript';
      script.async = false;
      script.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(script);
    }
  }

}
