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
    task:any;
    taskDetails:any;

    constructor(private _ningiagoldService: NinjagoldService){
    
    }
    // runs function as soon as component is called; works just like constructor in Class
    ngOnInit(){
        this.tasks = [];
        this.task = {title: "", description: ""};
        this.taskDetails ={title: "", description: ""};
        this.getTasks();
    }

    addTask() {
        console.log('addTask is working',this.task);
        const tempObservable = this._ningiagoldService.addTask(this.task);
        tempObservable.subscribe(
            (tasksReturned) => {
                console.log('response: ', tasksReturned);
               
                this.getTasks();
            }, (err) => {
                console.log('error: ', err);
            });

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

    }
 

    getWidget(id) {
        console.log("@@@@ 1",id);
        const tempObservable = this._ningiagoldService.getWidget(id);
        tempObservable.subscribe(
            (success) => {
                console.log("@@@@ 5 response:", success);
                this.taskDetails = success;

                    console.log('taskDetail :', this.taskDetails);

            },
            (error) => {
                console.log('error: ', error);
            }
        );
    }
    updateTask() {
        const tempObservable = this._ningiagoldService.updateTask(this.taskDetails);
        tempObservable.subscribe(
            (tasksReturned) => {
                console.log('response: ', tasksReturned);
                this.taskDetails = tasksReturned;
                this.getTasks();
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
