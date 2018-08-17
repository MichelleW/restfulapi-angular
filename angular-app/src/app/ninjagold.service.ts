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

  getTask(id) {
    return this._http.get('/tasks/'+id);
  }

  addTask(newTask){
    console.log('newtask :', newTask);
    return this._http.post('/tasks',newTask);
  }

  //post data to /tasks/:id route with taskid
  updateTask(taskid) {
   console.log('updatetask :', taskid);
    return this._http.get('/tasks/:id',taskid);
  }

  deleteTask(taskObj){
    console.log('delete id:', taskObj._id);
    return this._http.delete('/tasks/'+taskObj._id);
  }
}

