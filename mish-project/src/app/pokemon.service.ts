import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) {
    //pokemon function goes here:
    this.getPokemons(1);
    this.myFavoritePokemon(10);

    // this.createPokemon({title:'poke poke',completed:true});
    // this.deletePokemon("k5546hhehteheht");
    // this.updatePokemon("5b6ccc304753e31df7a78be7",{title:'newblog',completed:true});
    
   }
 
   getPokemons(){
    console.log('getPokemons invoked');
    let tempObservable = this.http.get("https://pokeapi.co/api/v2/pokemon/");

    tempObservable.subscribe(function(response){
      console.log("getPokemons response:", response);
    })

  }

  myFavoritePokemon(id){
    console.log('myFavoritePokemon invoked');
    this.http.get("https://pokeapi.co/api/v2/pokemon/"+id)
    .subscribe(function(response){
      console.log("myFavoritePokemon response:", response);
    })
  }
  
  createPokemon(obj) {
    const tempObservable = this.http.post('/tasks/', obj);
    tempObservable.subscribe(
      function(response) {
        console.log('createPokemon response: ', response);
      }, function(err) {
        console.log('err: ', err);
      });
  }

  updatePokemon(id, obj){
    // '/tasks/7hw3hh343h4'
    const tempObservable = this.http.put('/tasks/'+id, obj);
    tempObservable.subscribe(
      function(response) {
        console.log('updatePokemon task response: ', response);
      }, function(err) {
        console.log('err: ', err);
      });
  }

  deletePokemon(id){
    this.http.delete('/tasks/'+id)
    .subscribe(function(response){
      console.log("deletePokemon response:", response);
    })
  }
  
}
