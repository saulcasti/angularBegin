import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [  
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'todos', loadChildren: './todo/todo.module#TodoModule'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
