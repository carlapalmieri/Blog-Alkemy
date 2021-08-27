import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/user';
import { Post } from 'src/app/interfaces/post';

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

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    const params = this.activatedRoute.snapshot.params;
    this.getUserById(params.id)
    this.getPostsByUser(params.id)
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

  seePostsDetails() {
    this.viewPostsDetails = true
  }

  hidePostsDetails() {
    this.viewPostsDetails = false
  }


}
