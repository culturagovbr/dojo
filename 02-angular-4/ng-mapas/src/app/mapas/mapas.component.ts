import { Component, OnInit } from '@angular/core';

import { MapasService } from '../mapas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {
  
  agentes: any;

  constructor(private mapasService: MapasService, private http: HttpClient) {
    //console.log(mapasService)
    // this.agentes = mapasService.getAgentes();
    this.http.get<ItensResponse>('http://mapas.cultura.gov.br/api/agent/find?@select=id,name,location&@limit=10')
    .subscribe(data => {
      this.agentes = data;
    });
    
    interface ItensResponse {
      agentes: Object[];
    }
  }

  ngOnInit() {
  }

}
