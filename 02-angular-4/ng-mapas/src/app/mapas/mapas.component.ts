import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MapasService } from './mapas.service';
import leaflet from 'leaflet';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {
  
  agentes: any;
  @ViewChild('mapid') mapid: ElementRef;

  constructor(private mapasService: MapasService) {
    // console.log(mapasService)
    mapasService.getAgentes()
    .then((response) => {
      this.agentes = response.json() as any[];
    });
    //.then(response => this.agentes = response);

    // O código abaixo funciona, porém vamos jogar pro service
    // this.http.get<ItensResponse>('http://mapas.cultura.gov.br/api/agent/find?@select=id,name,location&@limit=10')
    // .subscribe(data => {
    //   // this.agentes = data;
    // });
    
    interface ItensResponse {
      agentes: Object[];
    }
  }

  ngOnInit() {

    this.mapasService.getAgentes()
    .then((response) => {
      this.agentes = response.json() as any[];
      console.log(this.agentes);
      this.agentes.forEach(element => {
           var marker = leaflet.marker([element.location.latitude,element.location.longitude],{icon: icon}).addTo(mymap);
      });
    });

    var mymap = leaflet.map(this.mapid.nativeElement)
    .setView([-15.7217175,-48.0774477,11], 4);

    var icon = leaflet.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.2.0/dist/images/marker-icon.png',
      //shadowUrl: 'leaf-shadow.png',
  
      //iconSize:     [38, 95], // size of the icon
      //shadowSize:   [50, 64], // size of the shadow
      //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

    leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(mymap);

    
    console.log(this.agentes)
  //  this.agentes.forEach(element => {
   //   var marker = leaflet.marker(element,{icon: icon}).addTo(mymap);
  // });

  }

}
