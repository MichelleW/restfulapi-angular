import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class NinjagoldService {

  constructor(private _http:HttpClient) { 

    
  }

  adventureLog(gold,msg){
    return this._http.post('/ninjas',{gold:gold,msg:msg});
  };
 

}

