import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks: any;
    task: any;
    show:boolean;

    constructor(private _dataService: DataService) {
        this.task = []
        this.task = null;
        this.show = false;
    }
    toggle(){
        this.show = !this.show;
    }
    getTasks() {
        console.log('getTasks is working');
        const tempObservable = this._dataService.getTasks();
        tempObservable.subscribe(
            (tasksReturned) => {
                console.log('response: ', tasksReturned);
                this.tasks = tasksReturned;
            }, (err) => {
                console.log('isplerr: ', err);
            });
    }

    getTask(id) {
        console.log('getTask is working');
        const tempObservable = this._dataService.getOneTask(id);

        tempObservable.subscribe(
            (taskReturned) => {
                console.log('response: ', taskReturned);
                this.task = taskReturned;
            }, (err) => {
                console.log('err: ', err);
            });
    }


}
