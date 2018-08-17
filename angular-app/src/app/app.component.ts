import { NinjagoldService } from './ninjagold.service';

import { Component, OnInit} from '@angular/core';

//decorator
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
    tasks:any;
    newTask:any;
    editTask:any;

    constructor(private _ningiagoldService: NinjagoldService){
    
    }
    // runs function as soon as component is called; works just like constructor in Class
    ngOnInit(){
        this.tasks = [];
        this.newTask = {title: "", description: ""}
        this.getTasks();
    }

    addTask() {
        console.log('addTask is working',this.newTask);
        const tempObservable = this._ningiagoldService.addTask(this.newTask);
        tempObservable.subscribe(
            (tasksReturned) => {
                console.log('response: ', tasksReturned);
                this.newTask = tasksReturned;
                this.getTasks();
            }, (err) => {
                console.log('error: ', err);
            });
        //reset form field value to empty 
        this.newTask ={title:"", description:""}

    }

    getTasks() {
        console.log('getTasks is working');
        const tempObservable = this._ningiagoldService.getTasks();
        tempObservable.subscribe(
            (tasksReturned) => {
                console.log('response: ', tasksReturned);
                this.tasks = tasksReturned;
            }, (err) => {
                console.log('error: ', err);
            });

            this.newTask ={title:"", description:""}
    }

    updateTask(id) {
      console.log('test id', id);
      const tempObservable = this._ningiagoldService.updateTask(id);
      tempObservable.subscribe(
        (tasksReturned) => {
          console.log('response: ', tasksReturned);
          this.tasks = tasksReturned;
        }, (err) => {
          console.log('error: ', err);
        });
    }

    deleteTask(id){
        console.log('delete task :', id);
        const tempObservable = this._ningiagoldService.deleteTask(id);
        tempObservable.subscribe(
            (tasksReturned) => {
            console.log('hi response: ', tasksReturned);
            this.tasks = tasksReturned;
            }, (err) => {
            console.log('error: ', err);
            });
    }

}
