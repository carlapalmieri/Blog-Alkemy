import { Component, Input, OnInit } from '@angular/core';
import { Album, Photo } from 'src/app/interfaces/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album!: Album;
  
  
  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
  }


}
