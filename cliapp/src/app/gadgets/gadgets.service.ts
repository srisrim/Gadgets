import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DataResponse } from './gadget.typedef'
import 'rxjs/add/operator/map';

@Injectable()
export class GadgetsService {

  results: any;

  constructor(private http: Http) {
  }

  getInitialData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(data =>{
        return this.results = data;
      } );
  }

}
