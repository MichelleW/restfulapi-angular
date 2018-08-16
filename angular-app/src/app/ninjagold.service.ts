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
    console.log('new task', newTask);
    
    return this._http.post('/tasks',newTask);
  }

  //5b75b4e081e74e6d1cdeb027

  getOneTask(id) {
    return this._http.get('/tasks/:id');
  }
}

