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

    constructor(private _dataService: DataService) {
        // this.tasks = [ 
        //     {
        //         "userId": 1,
        //         "id": 1,
        //         "title": "Finish Angular Assignments",
        //         "completed": false
        //       },
        //       {
        //         "userId": 1,
        //         "id": 2,
        //         "title": "Do laundry",
        //         "completed": false
        //       },
        //       {
        //         "userId": 1,
        //         "id": 3,
        //         "title": "Buy Milk ",
        //         "completed": false
        //       },{
        //         "userId": 1,
        //         "id": 20,
        //         "title": "Have some donuts",
        //         "completed": true
        //       },
        //       {
        //         "userId": 2,
        //         "id": 21,
        //         "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        //         "completed": false
        //       },
        //       {
        //         "userId": 2,
        //         "id": 22,
        //         "title": "distinctio vitae autem nihil ut molestias quo",
        //         "completed": true
        //       },
        //       {
        //         "userId": 2,
        //         "id": 23,
        //         "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        //         "completed": false
        //       }
        // ];
        this.task = []
        this.task = null;
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
