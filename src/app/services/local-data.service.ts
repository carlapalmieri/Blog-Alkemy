import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Album } from '../interfaces/album';
import { Post } from '../interfaces/post';
import { Todo } from '../interfaces/todos';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  posts: Post[] = [];
  albums: Album[] = [];
  todos: Todo[] = [];
  
  constructor(private router: Router) { }


  getPosts() {
    if(localStorage.getItem('posts') === null) {
      this.posts = []
      return this.posts
    } else {
      this.posts = JSON.parse(localStorage.getItem('posts')!)
      return this.posts
    }
  }

  getAlbums() {
    if(localStorage.getItem('albums') === null) {
      this.albums = []
      return this.albums
    } else {
      this.albums = JSON.parse(localStorage.getItem('albums')!)
      return this.albums
    }
  }

  getTodos() {
    if(localStorage.getItem('todos') === null) {
      this.todos = []
      return this.todos
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos')!)
      return this.todos
    }
  }

  getTodosByUserService() {
    this.getTodos()
    let todosByUser: Todo[] = [];
    let currentUser: User = this.getuserLoggedService()
    if(localStorage.getItem('todos') === null) {
      console.log(todosByUser)
      return todosByUser
    } else {
        for(let todo of this.todos) {
          if(todo.userId === currentUser.id) {
            todosByUser.push(todo)
          }
        }
      console.log(todosByUser)
      return todosByUser
    }
  }

  addTodo(todo: Todo) {
    if(localStorage.getItem('todos') === null) {
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      console.log(this.todos)
    } else {
      if(!this.todoExists(todo)) {
        this.todos = JSON.parse(localStorage.getItem('todos')!)
        this.todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        console.log(this.todos)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'El usuario ya existe',
          showConfirmButton: false,
          timer: 1000
        })
      }

    }
  }

  addPost(post: Post) {
    if(localStorage.getItem('posts') === null) {
      this.posts.push(post);
      localStorage.setItem('posts', JSON.stringify(this.posts));
      console.log(this.posts)
    } else {
      if(!this.postExists(post)) {
        this.posts = JSON.parse(localStorage.getItem('posts')!)
        this.posts.push(post);
        localStorage.setItem('posts', JSON.stringify(this.posts));
        console.log(this.posts)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'El usuario ya existe',
          showConfirmButton: false,
          timer: 1000
        })
      }
    }
  }

  postExists(postEvaluated: Post):boolean {
    let exists = false
    for(const post of this.posts) {
      if(post === postEvaluated) {
        exists = true
        return exists
      } else {}
    }
    return exists
  }

  todoExists(todoEvaluated: Todo):boolean {
    let exists = false
    for(const todo of this.todos) {
      if(todo === todoEvaluated) {
        exists = true
        return exists
      } else {}
    }
    return exists
  }

  deleteTodo(todo: Todo) {
    this.getTodos();
    for(let i = 0; i <this.todos.length; i++) {
      if(todo === this.todos[i]) {
        this.todos.splice(i, 1),
        localStorage.setItem('todos',  JSON.stringify(this.todos))
      }
    }
  }

  deletePost(post: Post) {
    this.getPosts();
    for(let i = 0; i <this.posts.length; i++) {
      if(post === this.posts[i]) {
        this.posts.splice(i, 1),
        localStorage.setItem('posts',  JSON.stringify(this.posts))
      }
    }
  }

  getuserLoggedService() {
    return JSON.parse(localStorage.getItem('userLogged')!)
  }

}
