
import { TaskService } from './../../services/tasks.service';
import { Component } from '@angular/core';
import {Task} from '../../Task';

@Component({
  moduleId:module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
 
})
export class TasksComponent {
   tasks:Task[];
   name:string;
   email:String;
  constructor(private taskService:TaskService){
    this.taskService.getTasks().subscribe(tasks =>{
  this.tasks=tasks;
    });

  }

  addTasks(event:any){
    event.preventDefault();
    var NewTask={
      name:this.name,
      email:this.email
    }
this.taskService.addTask(NewTask)
.subscribe(task =>{
  this.tasks.push(task);
  this.name='';
});
  }
  deleteTask(id:any){
    var tasks = this.tasks;
    this.taskService.deleteTask(id).subscribe(data =>{
      if(data.n ==1){
        for(var i=0;i<tasks.length;i++){
          if(tasks[i]== id){
            tasks.splice(i,1);
          }
        }
      }
    })

  }

  updateStatus(task:any){
    var _task = {
      _id:_task.id,
      name:task.name,
      email:!task.email
    };
    this.taskService.updateStatus(_task).subscribe(data =>{
      task.email=!task.email;
    });
  }

}
