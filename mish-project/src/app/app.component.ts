import { PokemonService } from './pokemon.service';
import { Component } from '@angular/core';
// import {DataService} from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //inject service by adding to param 
  constructor(private _pokemon: PokemonService){

  }

 

}
