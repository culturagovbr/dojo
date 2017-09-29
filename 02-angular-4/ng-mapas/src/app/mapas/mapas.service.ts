import { Injectable } from '@angular/core';
import { Http, Response }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MapasService {
  result: any;
  teste : any;

  constructor(private http: Http) { }
  
  getAgentes() : Promise<Response> {
      return this.http.get('http://mapas.cultura.gov.br/api/agent/find?@select=id,name,location&@limit=1000')
      .toPromise();   
  }

 

}
