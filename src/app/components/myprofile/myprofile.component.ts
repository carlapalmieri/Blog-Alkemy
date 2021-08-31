import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album';
import { Post } from 'src/app/interfaces/post';
import { Todo } from 'src/app/interfaces/todos';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  posts: Post[] = [];
  albums: Album[] = [];
  todos: Todo[] = [];
  
  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: ''
        }
    },
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: ''
    }
  }

  constructor(private authService: AuthService, private localDataService: LocalDataService) { }

  ngOnInit(): void {
    this.getLoggedUser();
    this.getTodos()
  }

  getLoggedUser() {
    this.user = this.authService.getuserLoggedService()
  }

  getTodos() {
    this.todos = this.localDataService.getTodosByUserService()
  }

}
