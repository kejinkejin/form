import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class HttpserviceService {

  constructor(private http: Http) { }
  getdata(url:string):Observable<Response>{
    return this.http.get(url);
  }
}
