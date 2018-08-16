
import { Component, OnInit} from '@angular/core';

//decorator
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
    newTask:any;

    constructor(){

    }

    ngOnInit(){
        this.newTask = {title: "", description: ""}
    }

    onSubmit(){

        this.newTask ={title:"", description:""}
    }
   


}
