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
    
    }
    // runs function as soon as component is called; works just like constructor in Class
    ngOnInit(){
        this.newTasks = [];
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
                this.newTasks = tasksReturned;
            }, (err) => {
                console.log('error: ', err);
            });
    }


}
