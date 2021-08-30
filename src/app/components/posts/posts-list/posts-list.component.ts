import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  filtersPosts: FormGroup;
  posts: Post[] = [];
  filterActive:boolean = false;

  constructor(private postsService: PostsService, private builder: FormBuilder, private router: Router ) { 
    this.filtersPosts = this.builder.group({
      idUser: [null, Validators.pattern('/^[1-9]\d{6,10}$/')],
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

  getPostsByUser(id:number) {
    if(id !== 0 && id !== null) {
      this.postsService.getPostsByUserService(id).subscribe(
      res => {
      this.posts = res
      console.log(res)
      },
      err => console.log(err))
    }
    
  }
}
