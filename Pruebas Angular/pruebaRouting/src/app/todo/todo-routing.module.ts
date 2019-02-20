import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';;
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ResolverService } from '../services/resolver.service';

const routes: Routes = [  
  { path: '', component: TodosComponent },
  { path: 'item/new', component: TodoFormComponent},
  { path: 'item/:id', component: TodoFormComponent, resolve:{item: ResolverService } },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
