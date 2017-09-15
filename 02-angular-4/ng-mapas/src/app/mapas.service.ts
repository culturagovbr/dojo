import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable()
export class MapasService {
  
  result: any;
  teste : any;

  constructor(private http: HttpClient) { }
  getAgentes() {
    
    //  this.http.get('http://mapas.cultura.gov.br/api/agent/find')
    // .subscribe((response) => {
    
    //   return response;
    // });


    this.teste = this.http.get<ItensResponse>('http://mapas.cultura.gov.br/api/agent/find')
    .subscribe(data => {
      this.result = data;
      this.teste = data;
      console.log('aaaa');
      console.log(data);
    });

    return this.teste;

    // console.info('mapas.service');
    // console.info(this.teste);

    interface ItensResponse {
      result: Object[];
    }

    //return ['Ramon','Vinicius','Ruy']
  }

 

}
