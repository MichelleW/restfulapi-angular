import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    console.log('todos Service (todos.service.ts) is running...');
    this.apiUrl = "https://jsonplaceholder.typicode.com/todos/"
    this.getTasks();
  }

  getTasks() {
    return this.http.get(this.apiUrl)
  }

  getOneTask(id) {
    console.log('getOneTask invoked');
    return this.http.get(this.apiUrl + id);
  }


}
