import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import 'rxjs/add/operator/map';




@NgModule({
  imports: [BrowserModule,HttpModule,FormsModule],
  declarations:[AppComponent,TasksComponent],
  bootstrap:[AppComponent]
})

export class AppModule { }
