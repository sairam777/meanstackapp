import { TaskService } from './services/tasks.service';
import { Component } from '@angular/core';


@Component({
   moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[TaskService]


})
export class AppComponent {


}
