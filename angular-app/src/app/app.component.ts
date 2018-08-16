import { NinjagoldService } from './ninjagold.service';

import { Component, OnInit} from '@angular/core';

//decorator
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
    newTasks:any;
    newTask:any;

    constructor(private _ningiagoldService: NinjagoldService){
    this.newTasks = {};
    this.newTask = {};
    }

    ngOnInit(){
        this.newTask = {title: "", description: ""}
        this.getTasks()
    }

    onSubmit(){

        this.newTask ={title:"", description:""}
        this.addTask();
    }
    addTask() {
        console.log('addTask is working');
        const tempObservable = this._ningiagoldService.addTask(this.newTask);
        tempObservable.subscribe(
            (tasksReturned) => {
                console.log('response: ', tasksReturned);
                this.newTask = tasksReturned;
            }, (err) => {
                console.log('error: ', err);
            });
    }

    getTasks() {
        console.log('getTasks is working');
        const tempObservable = this._ningiagoldService.getTasks(this.newTasks);
        tempObservable.subscribe(
            (tasksReturned) => {
                console.log('response: ', tasksReturned);
                this.newTask = tasksReturned;
            }, (err) => {
                console.log('error: ', err);
            });
    }


}
