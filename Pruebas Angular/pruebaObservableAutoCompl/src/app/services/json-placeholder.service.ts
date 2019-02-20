import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { JsonPlaceholder } from '../class/jsonPlaceholder.class';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  
  jsonList: JsonPlaceholder[];
  
  constructor(
    private http: HttpClient){
    }

    urlRequest:string;

    getJSON (param:string = "todos", id:number){
      if(id) this.urlRequest = "https://jsonplaceholder.typicode.com/"+ param + "/" + id;
      else this.urlRequest = "https://jsonplaceholder.typicode.com/"+ param;

      return this.http.get(this.urlRequest)
         
    }


    
}
