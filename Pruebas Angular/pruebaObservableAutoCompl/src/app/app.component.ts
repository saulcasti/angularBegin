import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from './services/json-placeholder.service';
import { JsonPlaceholder } from './class/jsonPlaceholder.class';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pruebaObservableAutoCompl';

  text:string="insert text"

  suggestion:JsonPlaceholder[];

  subscribe$ = new Subject<any>();

  constructor(private jsonService:JsonPlaceholderService){
    //jsonService.suggestions$.subscribe(list => this.suggestion = list)
  }

  ngOnInit(): void {
    const searchBox = document.getElementById('search-box');

    const typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => {
        let a:any = e.target; 
        return a.value;}),
      debounceTime(500), 
      distinctUntilChanged(),
      takeUntil(this.subscribe$)) //takeUntil, sirve para hace "unsubscribe"
      .subscribe(
      (event)=>{
        this.searchSuggestion(event);
        
      });
  }

  ngOnDestroy(){
    this.subscribe$.next();
    this.subscribe$.complete(); //se completa el subject, cierra el observable
  }
  
  
  

  searchSuggestion(searchValue : string ) {  
    console.log(searchValue);
    this.jsonService.getJSON("todos", null).subscribe(data=> {
            
      let list:JsonPlaceholder[] = [];
      for (let l of <JsonPlaceholder[]> data) {
        if(searchValue.indexOf(l.title) > -1) list.push(l);
    }
    console.log(list)
      this.suggestion = list;
    });
  }
}
