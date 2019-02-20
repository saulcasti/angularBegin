import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { ResolverService } from './services/resolver.service';

const routes: Routes = [  
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'item/new', component: TodoFormComponent},
  { path: 'item/:id', component: TodoFormComponent, resolve:{item: ResolverService } },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
