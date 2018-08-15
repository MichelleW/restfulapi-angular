import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    //define datat types
    tasks: any;
    task: any;
    show:boolean;


    //what happens when i add another private variable? which private var does this.task belongs to??

    constructor(private _todosService: TodosService) {
        //assign value to the defined variables
        console.log('_todosService:' _todosService);
        
        this.task = []
        this.task = null;
        this.show = false;
    }
    //need to reassign value to opposite of the current value
    // toggle(){
    //     this.show = !this.show;
    // }
    getTasks() {
        console.log('getTasks is working');
        const tempObservable = this._todosService.getTasks();
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
        const tempObservable = this._todosService.getOneTask(id);

        tempObservable.subscribe(
            (taskReturned) => {
                console.log('response: ', taskReturned);
                this.task = taskReturned;
            }, (err) => {
                console.log('err: ', err);
            });
    }


}
