import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPlaceholder } from '../interfaces/jsonPlaceholder.class';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  
  jsonList: JsonPlaceholder[];

  itemSelected:JsonPlaceholder = {
    userId:-1,
    id: -1,
    title:"-1",
    completed: false
  };
  
  select$ = new Subject<JsonPlaceholder>();
  
  constructor(
    private http: HttpClient){
    }

    urlRequest:string;

    getJSON (param:string, id:number):any {
      if(id) this.urlRequest = "https://jsonplaceholder.typicode.com/"+ param + "/" + id;
      else this.urlRequest = "https://jsonplaceholder.typicode.com/"+ param;

      return this.http.get(this.urlRequest);
    }

    getList(): JsonPlaceholder[] {
      return this.jsonList;
    }

    putJSON(item:JsonPlaceholder){
      let body = {
        id: item.id,
        title:  item.title,
        completed:  item.completed,
        userId:  item.userId
      }

      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      return this.http.put("https://jsonplaceholder.typicode.com/todo/"+ item.id, body, httpOptions);
    }

    postJSON(title:string, completed:boolean){
      let body = {
        title:  title,
        completed:  completed
      }

      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      return this.http.post("https://jsonplaceholder.typicode.com/todos", body, httpOptions);
    }

    
}
