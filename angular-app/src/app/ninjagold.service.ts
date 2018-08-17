import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class NinjagoldService {

  constructor(private _http:HttpClient) { 
  }

  adventureLog(gold,msg){
    return this._http.post('/ninjas',{gold:gold,msg:msg});
  };

  getTasks() {
    return this._http.get('/tasks');
  }

  addTask(newTask){
    console.log('newtask :', newTask);
    return this._http.post('/tasks',newTask);
  }

  getWidget(id) {
    console.log("@@@@ 2",id);
    return this._http.get('/tasks/' + id);
  }

  deleteTask(taskObj){
    console.log('delete id:', taskObj._id);
    return this._http.delete('/tasks/'+taskObj._id);
  }

   //post data to /tasks/:id route with taskid
 
  getTask(id) {
    console.log("@@@@ 2");
    return this._http.get('/tasks/' + id);
  }

  updateTask(taskDetails) {
    console.log('taskDetails :', taskDetails);
    return this._http.put('/tasks/' + taskDetails._id, taskDetails);
  }

 
}

