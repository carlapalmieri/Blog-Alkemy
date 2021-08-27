import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums() {
    this.albumsService.getAlbumsService().subscribe(
      res => {
      this.albums = res
      console.log(res)
      },
      err => console.log(err))
  }
}
