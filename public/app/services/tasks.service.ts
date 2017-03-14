import { Http,Headers } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()

export class TaskService{
    constructor(private http:Http){
    console.log("Task Service Initilizes");
}

getTasks(){
    return this.http.get("http://localhost:3000/tasks")
    .map(res => res.json());
}
addTask(newTask : any){
    var headers = new Headers;
    headers.append('content-Type','application/json');
    return this.http.post("http://localhost:3000/task",JSON.stringify(newTask),{headers:headers})
    .map(res => res.json());
}
deleteTask(id:any){
return this.http.delete("/task/"+id)
.map(res => res.json());
}
// updateTask(task: any){
//     var headers = new Headers;
//     headers.append('content-Type','application/json');
//     return this.http.put("http://localhost:3000/task"+task._id,JSON.stringify(task),{headers:headers})
//     .map(res => res.json());

// }
}
