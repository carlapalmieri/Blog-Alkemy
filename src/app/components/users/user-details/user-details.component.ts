import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/user';
import { Post } from 'src/app/interfaces/post';
import { Todo } from 'src/app/interfaces/todos';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  viewPostsDetails: boolean = false

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

  posts: Post[] = [];

  todos: Todo[] = [];

  albums: Album[] = [];

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    const params = this.activatedRoute.snapshot.params;
    this.getUserById(params.id);
    this.getPostsByUser(params.id);
    this.getTodosByUser(params.id);
    this.getAlbumsByUser(params.id);
  }

  ngOnInit(): void {
    
  }

  getUserById(id:number) {
    this.usersService.getUserByIdService(id).subscribe(
      res => {
      this.user = res
      console.log(res)
      },
      err => console.log(err))
  }

  getPostsByUser(id:number) {
    this.usersService.getPostsByUserService(id).subscribe(
      res => {
      this.posts = res
      console.log(res)
      },
      err => console.log(err))
  }

  getTodosByUser(id:number) {
    this.usersService.getTodosByUserService(id).subscribe(
      res => {
      this.todos = res
      console.log(res)
      },
      err => console.log(err))
  }

  getAlbumsByUser(id:number) {
    this.usersService.getAlbumsByUserService(id).subscribe(
      res => {
      this.albums = res
      console.log(res)
      },
      err => console.log(err))
  }

  seePostsDetails() {
    this.viewPostsDetails = true
  }

  hidePostsDetails() {
    this.viewPostsDetails = false
  }


}
