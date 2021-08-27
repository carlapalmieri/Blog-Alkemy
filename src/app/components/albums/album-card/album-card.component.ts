import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album!: Album;
  
  constructor() { }

  ngOnInit(): void {
  }

}
