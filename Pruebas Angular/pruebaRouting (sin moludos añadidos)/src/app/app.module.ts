import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule }    from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CheckboxModule} from 'primeng/checkbox';

import { TodosComponent } from './components/todos/todos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AlbumsComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    BrowserAnimationsModule, NoopAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    MessageModule,
    MessagesModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
