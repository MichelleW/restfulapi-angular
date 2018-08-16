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
  getTasks(newTasks) {
    return this._http.get('/tasks',newTasks);
  }

  addTask(newTask){
    return this._http.post('/tasks',newTask);
  }
}

