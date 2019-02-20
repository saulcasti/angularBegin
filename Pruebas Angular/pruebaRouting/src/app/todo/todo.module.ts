import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CheckboxModule} from 'primeng/checkbox';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import {ToggleButtonModule} from 'primeng/togglebutton';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoRoutingModule } from './todo-routing.module';



@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    MessageModule,
    MessagesModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    ToggleButtonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
