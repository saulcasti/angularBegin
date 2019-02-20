import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { JsonPlaceholder } from '../interfaces/jsonPlaceholder.class';
import { JsonPlaceholderService } from './json-placeholder.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Promise<any>>{
  
  resolve(route:ActivatedRouteSnapshot): Promise<any>{
    return this.jsonPlaceholderService.getJSON("todos", route.params.id).toPromise();
  }

  constructor(private jsonPlaceholderService:JsonPlaceholderService) { }
}
