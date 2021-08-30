import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getTodosService() {
    return this.http.get<Todo[]>(`${this.URL}todos`)
  }

  getTodosByUserService(id: number) {
    return this.http.get<Todo[]>(`${this.URL}users/${id}/todos`)
  }
}
