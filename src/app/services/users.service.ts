import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Todo } from '../interfaces/todos';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = 'https://jsonplaceholder.typicode.com/'
  
  constructor(private http: HttpClient) { }

  getUsersService() {
    return this.http.get<User[]>(`${this.URL}users`)
  }

  getUserByIdService(id: number) {
    return this.http.get<User>(`${this.URL}users/${id}`)
  }

  getPostsByUserService(id: number) {
    return this.http.get<Post[]>(`${this.URL}users/${id}/posts`)
  }

  getTodosByUserService(id: number) {
    return this.http.get<Todo[]>(`${this.URL}users/${id}/todos`)
  }

  getAlbumsByUserService(id: number) {
    return this.http.get<Todo[]>(`${this.URL}users/${id}/albums`)
  }
}
