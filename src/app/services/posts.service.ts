import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Comment } from '../interfaces/post';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  getPostsService() {
    return this.http.get<Post[]>(`${this.URL}posts`)
  }

  getPostsByIdService(id:number) {
    return this.http.get<Post>(`${this.URL}posts/${id}`)
  }

  getUserByIdService(id: number) {
    return this.http.get<User>(`${this.URL}users/${id}`)
  }

  getPostComentsService(id: number) {
    return this.http.get<Comment[]>(`${this.URL}posts/${id}/comments`)
  }
}
