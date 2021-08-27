import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, Comment } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  };

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

  comments: Comment[] = [];

  viewUserDetails: boolean = false

  viewComments: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getPostById(params.id);
    this.getPostComments(params.id)
  }

  getPostById(id:number) {
    this.postsService.getPostsByIdService(id).subscribe(
      res => {
      this.post = res
      this.getUserById(res.userId)
      console.log(res)
      },
      err => console.log(err))
  }

  getUserById(id:number) {
    this.postsService.getUserByIdService(id).subscribe(
      res => {
      this.user = res
      console.log(res)
      },
      err => console.log(err))
  }

  getPostComments(id:number) {
    this.postsService.getPostComentsService(id).subscribe(
      res => {
      this.comments = res
      console.log(res)
      },
      err => console.log(err))
  }

  seeUserDetails() {
    this.viewUserDetails = true
  }
  seeCommentsDetails() {
    this.viewComments = true
  }

  hideUserDetails() {
    this.viewUserDetails = false
  }
  hideCommentsDetails() {
    this.viewComments = false
  }
}
