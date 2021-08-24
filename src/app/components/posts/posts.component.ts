import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getPosts().subscribe(
      res => {
      this.posts = res
      console.log(res)
    },
    err => console.log(err))
  }

}
