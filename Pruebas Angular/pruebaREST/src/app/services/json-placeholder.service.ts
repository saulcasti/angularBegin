import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JsonPlaceholder } from '../interfaces/jsonPlaceholder.class';



@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(
    private http: HttpClient){
    }

    urlRequest:string;

    getJSON (param:string, id:number) {
      if(id) this.urlRequest = "https://jsonplaceholder.typicode.com/"+ param + "/" + id;
      else this.urlRequest = "https://jsonplaceholder.typicode.com/"+ param;

      return this.http.get(this.urlRequest);
    }
}
