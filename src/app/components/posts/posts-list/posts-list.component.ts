import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  filtersPosts: FormGroup;
  
  posts: Post[] = [];

  constructor(private postsService: PostsService, private builder: FormBuilder, private router: Router ) { 
    this.filtersPosts = this.builder.group({
      idUser: [],
      title: ['', Validators.minLength(3)],
    })
   }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPostsService().subscribe(
    res => {
    this.posts = res
    console.log(res)
    },
    err => console.log(err))
  }

  searchPosts(filters: object) {

  }
  
}
