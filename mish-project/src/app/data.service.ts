import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  //constructor will alway run at the first time we run projects; ie: it will run all functions once
  constructor(private http:HttpClient) { 
    console.log('Data Service (data.services.ts) is running...');
    this.getTasks();
    this.getOneTask(7);

    this.createTask({title:'newblog',completed:true});
    this.deleteTask("k5546hhehteheht");
    this.updateTask("5b6ccc304753e31df7a78be7",{title:'newblog',completed:true});
    
  }

  getTasks(){
    console.log('getTasks invoked');
    //old way:
    // this.http.get('/tasks',function(response){})

    //.subscribe takes in three params function subscribe(response, err, complete)
    //the third will run if response was success

    this.http.get('/tasks')
    .subscribe(function(response){
      console.log("getTasks response:", response);
    })

  }

  getOneTask(id){
    console.log('getOneTask invoked');
    this.http.get('/tasks/'+id)
    .subscribe(function(response){
      console.log("getOneTask response:", response);
    })
  }
  //

  createTask(obj) {
    const tempObservable = this.http.post('/tasks/', obj);
    tempObservable.subscribe(
      function(response) {
        console.log('createTask response: ', response);
      }, function(err) {
        console.log('err: ', err);
      });
  }

  updateTask(id, obj){
    // '/tasks/7hw3hh343h4'
    const tempObservable = this.http.put('/tasks/'+id, obj);
    tempObservable.subscribe(
      function(response) {
        console.log('update task response: ', response);
      }, function(err) {
        console.log('err: ', err);
      });
  }

  deleteTask(id){
    this.http.delete('/tasks/'+id)
    .subscribe(function(response){
      console.log("deleteTask response:", response);
    })
  }
  
}
