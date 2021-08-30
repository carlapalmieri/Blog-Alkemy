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

  getPostComentsService(id: number) {
    return this.http.get<Comment[]>(`${this.URL}posts/${id}/comments`)
  }

  getPostsByUserService(id: number) {
    return this.http.get<Post[]>(`${this.URL}users/${id}/posts`)
  }
}
