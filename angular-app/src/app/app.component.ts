import { NinjagoldService } from './ninjagold.service';
import { Component } from '@angular/core';

//decorator
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    totalGold: number;
    activityLog:string[];
 
    constructor(private _ninjagold:NinjagoldService) {
        //assign value to the defined variables
        this.totalGold = 0;
        this.activityLog = [];
    }
    farm(){
        console.log('farm was clicked');
        const gold = Math.floor((Math.random()*4)+2)
        console.log('gold',gold);
        const msg = `went to the farm and gained ${gold} gold.`;
        
        // const msg = "went to the farm" + gold + "gold. hehe";
        this.totalGold +=gold;
        //.unshift will push element to index 0
        this.activityLog.unshift(msg)
    }
   


}
